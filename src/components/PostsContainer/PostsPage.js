//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';

const PostsPage = (props) => {
  console.log(props);
  
  // set up state for your data
  const [data, setData] = useState(dummyData);
  console.log(data);
  
  return (
    <div className="posts-container-wrapper">
      {data.map(item => (
        < Post key={item.username} propsFromParent = {item}/>
      ))}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  )
};


export default PostsPage;
