import { KeyboardBackspace } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const OtpForm = ({ number, goToNumber, handleOtpSubmit }) => {
  const [showButton, setShowButton] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    const OTP = otp.join("");
    if (OTP.length === 6) setShowButton(true);
    else setShowButton(false);
  }, [otp]);

  const handleBack = () => {
    setOtp(["", "", "", "", "", ""]);
    goToNumber();
  };
  const handleInputChange = (index, event) => {
    const input = event.target.value;
    if (!/^\d*$/.test(input)) return;
    const newOtp = [...otp];
    newOtp[index] = input.substring(input.length - 1);
    setOtp(newOtp);

    if (input && index < 5 && inputRefs.current[index + 1])
      inputRefs.current[index + 1].focus();
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
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
      <Button
        variant="text"
        startIcon={<KeyboardBackspace />}
        onClick={handleBack}
        sx={{ maxWidth: "70px", textTransform: "capitalize", color: "#617a94" }}
      >
        Back
      </Button>
      <Typography
        variant="body1"
        fontWeight="bold"
        fontSize={18}
        color="white"
        my={1}
        pl={1.5}
      >{`Enter OTP sent to +91${number}`}</Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxHeight="50%"
        boxSizing="border-box"
        // my={4}
      >
        {otp.map((value, index) => (
          <FormControl
            key={index}
            sx={{
              m: 0,
              width: "80%",
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-number"
              type="text"
              value={value}
              inputRef={(input) => (inputRefs.current[index] = input)}
              onChange={(e) => handleInputChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              autoComplete="off"
              style={{
                color: "rgb(225,230,240)",
                fontSize: 18,
              }}
              sx={{
                "& fieldset": {
                  borderColor: "#617a94 !important",
                },
                width: "90%",
                height: "90%",
                padding: 0,
                paddingLeft: 0.5,
                borderRadius: 2,
              }}
            />
          </FormControl>
        ))}
      </Box>
      {showButton && (
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={() => handleOtpSubmit(otp.join(""))}
          sx={{
            fontWeight: "bold",
            color: "white",
            my: 1,
            maxWidth: "93%",
            alignSelf: "center",
          }}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default OtpForm;
