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
