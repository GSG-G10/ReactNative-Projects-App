import * as firebase from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { setImageUri } from "../redux/actions";

const storage = getStorage();

const metadata = {
  contentType: "image/jpg",
};

const firebaseStorage = async (
  data: Blob | Uint8Array | ArrayBuffer,
  imageName: string,
  setProgress: any,
  dispatch: any
) => {
  // Upload file and metadata to the object '443d6632-902c-44e5-928d-373fca1cbdea.jpg'
  const storageRef = ref(storage, `images/${imageName}`);
  const uploadTask = uploadBytesResumable(storageRef, data, metadata);

  try {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.floor(progress));
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            throw Error("you don't permission to access");
          case "storage/canceled":
            throw Error("Upload canceled");
          case "storage/unknown":
            throw Error("Unknown error occurred, inspect error.serverResponse");
        }
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          //   setImageUri(downloadURL)
          dispatch(setImageUri(downloadURL));
        });
      }
    );
  } catch (err) {
    return err;
  }
};

export default firebaseStorage;
