import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";
import styled from "styled-components";
const Form = ({ currentId, setCurrentId }) => {
  const [count, setCount] = useState(0);

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    position: [count],
    tags: [],
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);

    setPostData({
      title: "",
      message: "",
      position: [],
      tags: [],
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own event.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag.target.value] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({
      ...postData,
      tags: postData.tags.filter((tag) => tag !== chipToDelete),
    });
  };

  const incremental = () => {
    // const arr = [...positions];
    // arr.push(count);
    // setPositions(arr);

    // console.log(arr);
    setCount(count + 1);
    setPostData({ ...postData, position: [...postData.position, count] });
  };

  const decremental = () => {
    setCount(count - 1);
  };
  console.log(postData);
  return (
    <Display>
      <Paper className={classes.paper} elevation={6}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? `Editing "${post?.title}"` : "Creating an Event"}
          </Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />

          <Counter>
            Position
            <Button onClick={decremental} value={postData.position}>
              -
            </Button>
            <Typography
              value={postData.position}
              // onChange={({ e }) =>
              //   setPostData({
              //     ...postData,
              //     position: [...postData.position, e.target.value],
              //   })
              // }
            >
              {count}
            </Typography>
            <Button onClick={incremental} value={postData.position}>
              +
            </Button>
          </Counter>

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Display>
  );
};

export default Form;
const Counter = styled.div`
  display: flex;
  flex-direction: row;
`;
const Display = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
