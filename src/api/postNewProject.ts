import { addDoc } from "firebase/firestore";
import { projectsRef } from "../../firebase.config";

const postNewProject = async (data: any) => {
  const elm = await addDoc(projectsRef, data);
  return { ...data, id: elm.id };
};

export default postNewProject;
