// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import dummyData from "../../dummy-data";

// pass props in this file to
const Post = props => {
  console.log(props)
  
  // set up state for the likes
  const [likes, setLikes] = useState(0);
  return (
    <div className="post-border">
      <PostHeader
        username={props.propsFromParent.username}
        thumbnailUrl={
          props.propsFromParent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsFromParent.imageUrl}
        />
      </div>
      <LikeSection likes={likes} />
      
      <CommentSection
        postId={props.propsFromParent.imageUrl}
        comments={props.propsFromParent.comments}
      />
    </div>
  );
};

export default Post;
