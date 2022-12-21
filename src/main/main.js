import {getDocs, collection, doc} from "firebase/firestore";
import {db} from "../config/firebase.ts"
import { useState, useEffect } from "react";
import { Post } from "./post";
// interface Post {
//     id:String, 
//     userId: String,
//     title:String, 
//     username: String,
//     description: String;
// }

export const Main = () => {
    const [postsList, setPostsList] = useState(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
            setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
    
    useEffect(() => {
        getPosts();
    }, []);

    return (
    <div>
        {postsList?.map((post) => (
            <Post post={post}/>
        ))}
    </div>
    );
};