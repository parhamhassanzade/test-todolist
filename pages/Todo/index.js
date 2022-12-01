import { useState } from "react";
import Head from "next/head";
import Layout from "../../component/Layout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CardItem from "../../component/cardItem";
import { addTask, increment, CountUnFinished } from "../../redux/todo";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function index() {
  const dispatch = useDispatch();
  const { alltasks, tasks } = useSelector((state) => state.todo);
  const [task, setTask] = useState("");
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmitTask = () => {
    if (task.length > 0) {
      dispatch(addTask(task));
      dispatch(increment());
      dispatch(CountUnFinished());
      setTask("");
      toast.success("your task added successfuly");
    } else {
      toast.warn("please first add a new task");
    }
  };
  return (
    <>
      <Head>
        <title>ToDoList</title>
      </Head>
      <Layout>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            p: 1,
          }}
        >
          {" "}
          <FormControl fullWidth sx={{ m: 1, display: "flex" }}>
            <TextField
              variant="outlined"
              label="new task...."
              value={task}
              onChange={(e) => handleChange(e)}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 1,
                gap: "15px",
              }}
            >
              <Button
                sx={{
                  width: "150px",
                }}
                variant="contained"
                color="success"
                onClick={handleSubmitTask}
              >
                Add
              </Button>
              <Button
                sx={{
                  width: "150px",
                }}
                variant="outlined"
                color="error"
              >
                cancle
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: "15px", p: 2 }}
        >
          {tasks.length > 0 ? (
            tasks.map((text, index) => <CardItem key={index} taskText={text} />)
          ) : (
            <Typography textAlign="center">
              you dont have any task here...{" "}
            </Typography>
          )}
        </Box>
      </Layout>
    </>
  );
}

export default index;
