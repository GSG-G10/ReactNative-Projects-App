export const storeData = (data: any) => {
  return {
    type: "STORE_DATA",
    payload: data,
  };
};

export const createAuth = (data: object) => {
  return {
    type: "CREATE_AUTH",
    payload: data,
  };
};

export const setImageUri = (uri: string) => {
  return {
    type: "SET_URI",
    payload: uri,
  };
};
export const addNewProject = (newProject: object) => {
  return {
    type: "ADD_PROJECT",
    payload: newProject,
  };
};

export const filterProjects = (name: string) => {
  return {
    type: "FILTER_PROJECTS",
    payload: name,
  };
};