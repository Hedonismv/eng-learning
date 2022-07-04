import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
import {firebaseApp} from "./configFb";

export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);
