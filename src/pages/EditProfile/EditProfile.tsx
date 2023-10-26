import Nav from "../../components/Nav/Nav";

import TrainerEdit from "./components/TrainerEdit/TrainerEdit";
import UserEdit from "./components/UserEdit/UserEdit";

export default function EditProfile() {
  return (
    <>
      <Nav type="top" />
      <UserEdit />
      <TrainerEdit />
      <Nav type="home" />
    </>
  );
}
