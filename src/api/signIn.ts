import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase.config";

const signIn = async (email: string, password: string) => {
  try {
    const request: any = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      id: request.user.uid,
      token: request.user.accessToken,
    };
  } catch (err: any) {
    throw err.message;
  }
};

export default signIn;
