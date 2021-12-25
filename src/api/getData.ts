import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase.config";

const getData = async (query: string) => {
  try {
    const colRef = collection(db, `${query}`);
    //@ts-ignore
    const { _docs } = await getDocs(colRef);

    const data = _docs.map((elm: any) => {
      return { ...elm.data(), id: elm.id };
    });
    return data;
  } catch (error: any) {
    console.warn(error.message);
  }
};

export default getData;
