// import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onChangeBodyHandler, onChangeNameHandler, body, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onChangeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onChangeNameHandler} />
      </p>
      <p>{body}</p>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default NewPost;
