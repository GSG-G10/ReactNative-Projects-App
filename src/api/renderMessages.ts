import { query, onSnapshot, orderBy } from "firebase/firestore";
import { chatsRef } from "../../firebase.config";

const q = query(chatsRef, orderBy("createdAt", "desc"));

const renderMessages = (setMessages: Function) => {
  return onSnapshot(q, (querySnapshot: any) => {
    const array = querySnapshot.docs.map((doc: any) => ({
      _id: doc.data()._id,
      createdAt: doc.data().createdAt.toDate(),
      text: doc.data().text,
      user: doc.data().user,
    }));
    setMessages(array);
  });
};
export default renderMessages;
