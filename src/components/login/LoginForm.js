import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

const LoginForm = ({ goToOtp }) => {
  const [showButton, setShowButton] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (number.length === 10) {
      setShowClear(true);
      setShowButton(true);
    } else if (number !== "") setShowClear(true);
    else {
      setShowClear(false);
      setShowButton(false);
    }
  }, [number]);
  const handleClear = () => {
    setNumber("");
    setIsValid(true);
  };

  const handleNumberChange = (event) => {
    const input = event.target.value;
    if (!/^\d*$/.test(input)) return;
    setNumber(input);
    // setIsValid(true)
  };

  const handleSubmit = () => {
    const regex = /^[0-9]{10}$/;
    if (regex.test(number)) {
      goToOtp(number);
    } else setIsValid(false);
  };

  return (
    <Box
      sx={{
        width: "346px",
        height: "456px",
        background: "#040717",
        zIndex: 1,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        px: 2,
        py: 5,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" color="white" m={2}>
        Log in or sign up to continue
      </Typography>
      <Box
        mt={2}
        component="form"
        sx={{
          width: "100%",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          variant="outlined"
          placeholder="+91"
          value="+91"
          disabled
          sx={{
            maxWidth: "8ch",
            "& fieldset": {
              borderColor: "#617a94 !important",
            },
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "#617a94 !important",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#617a94 !important",
            },
          }}
        />
        <FormControl sx={{ m: 1, width: "100ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-number"
            error={!isValid}
            sx={{
              color: "#617a94 !important",
            }}
          >
            Enter mobile number
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-number"
            type="text"
            value={number}
            onChange={handleNumberChange}
            onFocus={() => setIsValid(true)}
            error={!isValid}
            endAdornment={
              showClear && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear mobile number"
                    onClick={handleClear}
                    edge="end"
                  >
                    <Close sx={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              )
            }
            label="Enter mobile number"
            style={{ color: "rgb(225,230,240)" }}
            sx={{
              "& fieldset": {
                borderColor: "#617a94 !important",
              },
            }}
          />
          {!isValid && (
            <FormHelperText error id="mobile-number-error" sx={{ mx: 1 }}>
              Please enter a valid mobile number
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      {showButton && (
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{
            fontWeight: "bold",
            color: "white",
            my: 4,
            maxWidth: "93%",
            alignSelf: "center",
          }}
        >
          Get OTP
        </Button>
      )}
    </Box>
  );
};

export default LoginForm;
