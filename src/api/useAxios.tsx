import axios from "axios";
import { useNavigate } from "react-router";

export function useAxios() {
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
  });

  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true; //🧐 이녀석을 쓰면 refreshToken cookie를 주고 받을 수 있음
      const accessToken = localStorage.getItem("accessToken");
      // console.log("로컬스토리지 accessToken", accessToken);
      if (accessToken) {
        config.headers.authorization = `${accessToken}`;
        //🧐 accessToken 존재하면 요청 헤더에  authorization에 accesssToken 으로 설정한다.
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      // console.log(originalRequest);
      // console.log("error", error);
      if (error.response.data.status.message === "Access Token 인증 오류") {
        // localStorage.removeItem("accessToken");
        return await instance
          .post(`${import.meta.env.VITE_API_URL}/api/users/token`)
          .then((response) => {
            // console.log("🤗재발급 성공");
            // console.log("response", response.headers.authorization);

            // 🧐 요청 받아와서 localStorage 에 저장한다.
            localStorage.setItem("accessToken", response.headers.authorization);
            originalRequest.headers.authorization = response.headers.authorization;
            // console.log("originalRequest:", originalRequest);
            return instance(originalRequest);
          })
          .catch((error) => {
            // console.log("error.response", error.response);
            //🧐 리프레시 토큰이 없어서 발급 실패
            // 데이터 삭제
            localStorage.removeItem("accessToken");
            // // 로그인 페이지로 이동
            navigate("/login");
            return Promise.reject(error);
          });
      } else if (error.response.data.status.message === "Refresh Token 인증 오류") {
        localStorage.removeItem("accessToken");
        navigate("/login");
        // navigate 함수는 비동기가 아니기 때문에 따로 await걸어주지 않아도 된다.
      }
    },
  );

  return instance;
}
