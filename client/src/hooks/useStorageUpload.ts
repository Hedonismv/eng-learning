import {useEffect, useState} from "react";
//
//
export const useStorageUpload = () => {
//
//     const {addImage} = useActions()
//
    const [progress, setProgress] = useState<Number>(0);
    const [error, setError] = useState<Error | null>(null);
    const [url, setUrl] = useState<String | null>(null);
//
//     useEffect(() => {
//         const storageRef = ref(storage, 'images/' + file.name );
//
//         const uploadTask = uploadBytesResumable(storageRef, file);
//
//         uploadTask.on('state_changed', snapshot => {
//             let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             setProgress(progress);
//         }, error => {
//             setError(error)
//         }, () => {
//             getDownloadURL(uploadTask.snapshot.ref)
//                 .then(downloadUrl => {
//                     addImage(downloadUrl);
//                 })
//                 .catch(error => console.log(error.message));
//         });
//
//     }, [file])
//
//
    return {progress, error, url};
}