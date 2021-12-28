import { addDoc } from "firebase/firestore";
import { chatsRef } from "../../firebase.config";

const sendMessage = (data: object) => {
  return addDoc(chatsRef, data);
};

export default sendMessage;
