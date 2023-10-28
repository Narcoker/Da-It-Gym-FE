import * as Go from "react-icons/go";
import * as Gi from "react-icons/gi";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Fa6 from "react-icons/fa6";
import * as Pi from "react-icons/pi";
import * as Fi from "react-icons/fi";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";
import * as Bs from "react-icons/bs";
import * as Lu from "react-icons/lu";
import * as Io5 from "react-icons/io5";
import * as Io from "react-icons/io";
import * as COLOR from "../constants/color";
const F_DEFAULT = "16";
const C_DEFAULT = `${COLOR.Primary}`;
interface Props {
  size?: string;
  color?: string;
}

//home Nav

export const ExerciseLogs = ({ size, color }: Props) => (
  <Fa.FaSlideshare size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const Routines = ({ size, color }: Props) => (
  <Gi.GiCellarBarrels size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const My = ({ size, color }: Props) => (
  <Go.GoPerson size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const MyRoutine = ({ size, color }: Props) => (
  <Pi.PiBarbellLight size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const MyExerciseLog = ({ size, color }: Props) => (
  <Gi.GiStrong size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
// 메뉴
export const Menu = ({ size, color }: Props) => (
  <Ai.AiOutlineMenu size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
// 휴지통
export const Trash = ({ size, color }: Props) => (
  <Fi.FiTrash2 size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//채팅 네브바
export const Follow = ({ size, color }: Props) => (
  <Md.MdOutlinePeopleAlt
    size={size ? size : F_DEFAULT}
    color={color ? color : C_DEFAULT}
  />
);
export const ChatRoom = ({ size, color }: Props) => (
  <Ri.RiChatSmile2Line size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//로그아웃
export const LogOut = ({ size, color }: Props) => (
  <Io5.IoLogOutOutline size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//비행기 모양 메신저
export const Messenger = ({ size, color }: Props) => (
  <Fa.FaTelegramPlane size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//고객센터
export const HeadSet = ({ size, color }: Props) => (
  <Bs.BsHeadset size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//인바디
export const Inbody = ({ size, color }: Props) => (
  <Pi.PiPersonArmsSpreadLight
    size={size ? size : F_DEFAULT}
    color={color ? color : C_DEFAULT}
  />
);

//검색
export const Search = ({ size, color }: Props) => (
  <Ai.AiOutlineSearch size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//북마크
export const BookMark = ({ size, color }: Props) => (
  <Fa.FaRegBookmark size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const BookMarkFill = ({ size, color }: Props) => (
  <Fa.FaBookmark size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const Share = ({ size, color }: Props) => (
  <Go.GoShare size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

export const Heart = ({ size, color }: Props) => (
  <Ai.AiOutlineHeart size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const HeartFill = ({ size, color }: Props) => (
  <Ai.AiFillHeart size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
// X 아이콘
export const Exit = ({ size, color }: Props) => (
  <Ai.AiOutlineClose size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

// 운동 일시정지

export const Pause = ({ size, color }: Props) => (
  <Fa6.FaPause size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
// 운동 시작
export const Start = ({ size, color }: Props) => (
  <Fa6.FaPlay size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

// 별표
export const Star = ({ size, color }: Props) => (
  <Ai.AiOutlineStar size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const StarFill = ({ size, color }: Props) => (
  <Ai.AiFillStar size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

// 사진 추가
export const AddImage = ({ size, color }: Props) => (
  <Lu.LuImagePlus size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

//체크
export const Check = ({ size, color }: Props) => (
  <Go.GoCheck size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

// 동그라미 체크
export const CheckCircle = ({ size, color }: Props) => (
  <Go.GoCheckCircle size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
export const CheckCircleFill = ({ size, color }: Props) => (
  <Go.GoCheckCircleFill
    size={size ? size : F_DEFAULT}
    color={color ? color : C_DEFAULT}
  />
);

// 추가 동그라미
export const AddCircle = ({ size, color }: Props) => (
  <Io.IoIosAddCircleOutline
    size={size ? size : F_DEFAULT}
    color={color ? color : C_DEFAULT}
  />
);

// 좌우 동그라미 화살표
export const RightArrow = ({ size, color }: Props) => (
  <Ai.AiOutlineRightCircle
    size={size ? size : F_DEFAULT}
    color={color ? color : C_DEFAULT}
  />
);
export const LeftArrow = ({ size, color }: Props) => (
  <Ai.AiOutlineLeftCircle
    size={size ? size : F_DEFAULT}
    color={color ? color : C_DEFAULT}
  />
);

//업다운 화살표
export const UpArrow = ({ size, color }: Props) => (
  <Go.GoChevronUp size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

export const DownArrow = ({ size, color }: Props) => (
  <Go.GoChevronDown size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);

export const Location = ({ size, color }: Props) => (
  <Md.MdLocationPin size={size ? size : F_DEFAULT} color={color ? color : C_DEFAULT} />
);
