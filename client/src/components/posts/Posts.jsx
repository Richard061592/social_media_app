import { useQuery } from "@tanstack/react-query";
import Post from "../post/Post";
import "./posts.scss";
import { makeRequest } from "../../axios";


const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    })
  );

  

  return (
    <div className="posts">
      {error 
        ? "Something Went Wrong!" 
        : isLoading 
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
