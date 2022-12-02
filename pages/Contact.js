import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card sx={{ Width: "30%" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={"https://avatars.githubusercontent.com/u/69312799?s=96&v=4"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hello,I'm Parham
          </Typography>
          <Typography variant="body2" color="text.secondary">
            you can reach me in this platform:
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="parhamhassanzade.p@gmail.com" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="09138090933" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
