import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../config/firebase.ts";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom"
import {auth, provider} from "../config/firebase.ts"

// interface CreateFormData {
//     title: string;
//     description: string;
// }

export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const schema = yup.object().shape({
        title: yup.string().required("YOu must add a title"),
        description: yup.string().required("YOu must add a description")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onCreatepost = async(data, CreateFormData) => {
        await addDoc (
            postsRef, {
                ...data,
                username: user?.displayName,
                userId: user?.uid,
            });
            navigate('/');
        };
    
    return (
        <form onSubmit={handleSubmit(onCreatepost)}>
            <input placeholder="Title.." {...register("title")}/>
            <p>{errors.title?.message}</p>
            <textarea placeholder="Description.." {...register("description")}/>
            <p>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    );
}