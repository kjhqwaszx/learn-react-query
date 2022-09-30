import styles from '../styles/Home.module.css'
import axios from 'axios'
import {useQuery} from "react-query";
import {Fragment} from "react";

const  getPosts = async () =>{

  const { data } = await axios.get("http://localhost:5000/posts")

  console.log('### data', data)

  return data;

}

export default function Home() {
  const {data:posts, isLoading, isError, error} = useQuery("posts",getPosts)

  if(isError){
    return <div>{error.message}</div>
  }

  return (
    <>
      <div>
        {isLoading ? (
          <div> Loading ...</div>
        ):(
          posts?.map((post)=>(
            <Fragment key={post.id}>
              <div>id: {post.id}</div>
              <div>title: {post.title}</div>
              <div>content: {post.content}</div>
              <div>createdAt: {post.createdAt}</div>
            </Fragment>
          ))
        )}
      </div>
    </>
  )
}
