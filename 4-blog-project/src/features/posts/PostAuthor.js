import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import React from 'react';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const user = users.find(user => user.id === userId);
    return <span>by {user ? user.name : "Unknown Author"}</span>;
};

export default PostAuthor;