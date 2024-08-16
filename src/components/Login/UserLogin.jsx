import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import loginPic from "../../assets/loginPicture.svg";
import LoginForm from "./LoginForm";

const imgStyle = {
  objectFit: `cover`,
  width: `100%`,
  height: `100%`
};

const UserLogin = () => {
  return (
    <Stack
      bgcolor={`#f9f7ff`}
      height={`100vh`}
      direction={{ xs: `column-reverse`, md: `row` }}
    >
      <Box height={{ xs: `90%`, md: `100%` }} flex={{ md: 1 }}>
        <Stack alignItems={{ xs: `center`, lg: `start` }}>
          <Link to={"/"}>
            <Box padding={{ xs: `1.5rem 3rem`, sm: `1.5rem 7rem` }}>
              <img

                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1707168040/ticked/Frame_34483_xv8rvv.png"
                alt="LOGO"
              />
            </Box>
          </Link>
        </Stack>
        <Divider />
        <LoginForm />
      </Box>
      <Box height={{ xs: `15%`, md: `100%` }} flex={{ md: 1 }}>
        <img
          style={imgStyle}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1707168045/ticked/Frame_26086175_ev8yrh.png`}
          alt="loginPicture"
        />
      </Box>
    </Stack>
  );
};

export default UserLogin;
