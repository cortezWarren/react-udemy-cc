import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [isDialogVisible, setIsDialogVisible] = useState(true);
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }
  function dialogHandler(isVisible) {
    setIsDialogVisible(isVisible);
  }
  return (
    <>
      {isDialogVisible && (
        <Modal onClose={() => dialogHandler(false)}>
          <NewPost
            onChangeBodyHandler={changeBodyHandler}
            onChangeNameHandler={changeNameHandler}
            onCancel={() => dialogHandler(false)}
            body={enteredBody}
          />
        </Modal>
      )}
      <button onClick={() => dialogHandler(true)}>New Post</button>
      <ul className={classes.posts}>
        <Post
          title="My First Post"
          author={enteredName}
          content={enteredBody}
        />
        <Post
          title="My Second Post"
          author="Jane Smith"
          content="This is the content of my second post."
        />
        <Post
          title="My Third Post"
          author="Bob Johnson"
          content="This is the content of my third post."
        />
      </ul>
    </>
  );
}

export default PostList;
