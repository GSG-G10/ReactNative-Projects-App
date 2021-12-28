import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase.config";

const signUp = async (email: string, password: string) => {
  try {
    const request: any = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      id: request.user.uid,
      token: request.user.accessToken,
      email,
    };
  } catch (err: any) {
    throw err.message;
  }
};

export default signUp;
