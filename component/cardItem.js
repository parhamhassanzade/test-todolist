import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Checkbox from "@mui/material/Checkbox";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CardItem({ taskText }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography align="center" component="div" variant="p">
            {taskText}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton>
            <DeleteForeverOutlinedIcon />
          </IconButton>
          <IconButton>
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
          {/* <Checkbox {...label} /> */}
        </Box>
      </Box>
    </Card>
  );
}
