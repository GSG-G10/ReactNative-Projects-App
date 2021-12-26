import { addDoc } from "firebase/firestore";
import { projectsRef } from "../../firebase.config";

const postNewProject = (data: any) => {
  addDoc(projectsRef, data);
  return data;
};

export default postNewProject;
