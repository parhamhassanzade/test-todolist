import { useState } from "react";
import Head from "next/head";
import Layout from "../../component/Layout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import CardItem from "../../component/cardItem";
import { addTask } from "../../redux/todo";
import { useDispatch, useSelector } from "react-redux";
function index() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              variant="outlined"
              label="new task...."
              value={values.amount}
              onChange={handleChange("amount")}
            />
          </FormControl>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: "15px", p: 2 }}
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Box>
      </Layout>
    </>
  );
}

export default index;
