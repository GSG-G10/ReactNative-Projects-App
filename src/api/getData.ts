import { getDocs } from "firebase/firestore";
import { projectsRef } from "../../firebase.config";

const getData = async () => {
  try {
    const { docs } = await getDocs(projectsRef);
    const data = docs.map((elm) => {
      return {...elm.data(),id:elm.id};
    });
    return data;
  } catch (error: any) {
    return error.message;
  }
};

export default getData;
