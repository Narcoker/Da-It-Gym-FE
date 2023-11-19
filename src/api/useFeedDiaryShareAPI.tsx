import { useAxios } from "./useAxios";
import { toast } from "react-toastify";

export function useFeedDiaryShareAPI() {
  const axios = useAxios();
  const API_URL = import.meta.env.VITE_API_URL;
  const requestPostFeedShare = (journalId: number, formData: FormData) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .patch(`${API_URL}/api/journals/${journalId}/share`, formData, config)
      .then()
      .catch((error) => toast.error(error));
  };
  return { requestPostFeedShare };
}
