import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import hikingLottie from "../assets/hiking-lottie.json";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [headerBg, setHeaderBg] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setHeaderBg("#040717");
      else setHeaderBg("transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("user-phone-number");
    navigate("/login");
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        background: "#eee",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <style>
        {`::-webkit-scrollbar {
  width: 10px; 
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px; 
}
::-webkit-scrollbar-track {
  border-radius: 5px; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}`}
      </style>
      <header
        style={{ position: "fixed", left: 0, right: 0, zIndex: 999 }}
        // onScroll={() => setScroll(window.scrollY)}
      >
        <Box
          width="100%"
          sx={{
            background: headerBg,
            transition: "background 0.3s ease-in-out",
            height: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            boxSizing: "border-box",
            opacity: 0.8,
          }}
        >
          <Box>
            <Typography variant="h4" color="#f5f2f0" fontFamily="cursive">
              Plan your trip
            </Typography>
          </Box>
          <Box>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="medium"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    fontSize: 18,
                    color: "white",
                    background: "indigo",
                  }}
                >
                  R
                </Avatar>
              </IconButton>
            </Tooltip>
            {/* <Button
          variant="text"
          color="inherit"
          sx={{ color: "#f5f2f0" }}
          onClick={handleLogOut}
          >
          Log Out
        </Button> */}
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1,
                "& .MuiAvatar-root": {
                  width: 24,
                  height: 24,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 21,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
            <MenuItem onClick={handleLogOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </header>
      <Box width="20%" mt={7}>
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
      <Box width="20%">
        <Lottie animationData={hikingLottie} />
      </Box>
    </Box>
  );
};

export default HomePage;
