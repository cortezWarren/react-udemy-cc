import classes from "./Post.module.css";

function Post({ author, content }) {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={classes.post}>
      <h2 className={classes.author}>{author}</h2>
      <p className={classes.text}>{content}</p>
    </li>
  );
}

export default Post;
