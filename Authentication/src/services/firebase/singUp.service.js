import firebase from "@/plugins/firebase";

export const firebaseSingUp = async (email, password) => {
  try {
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

firebase.auth().languageCode = "en";

export const firebaseResertPassword = async (email) => {
  try {
    const data = await firebase.auth().sendPasswordResetEmail(email);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};
