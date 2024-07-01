import React from "react";
import { MenuList } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../styles/Menu.css";

const Menu = () => {
  const location = useLocation();

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList.map((user) => (
          <Card
            key={user.id}
            sx={{
              maxWidth: "380px",
              display: "flex",
              m: 2,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardActionArea component={Link} to={`/add?foodname=${user.foodname}&price=${user.price}`}>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={user.image}
                alt={user.foodname}
              />

              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {user.foodname}
                </Typography>
                <Typography variant="body2">{user.description}</Typography>
                <br />
                <Typography sx={{ fontWeight: "bold" }}>{user.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;