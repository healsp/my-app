import { ReactNode } from "react";
import PostItem from './post-item';
import classes from './post-grid.module.css';


function PostGrid(props: any) {
  
  const { posts } = props;
  
  return(
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  ) 
}

export default PostGrid;