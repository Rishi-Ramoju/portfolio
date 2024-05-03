import { Box, keyframes, styled } from "@mui/material";
import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import OtpForm from "../components/login/OtpForm/OtpForm";
import { auth } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const BaseContainer = styled(Box)(({ theme }) => ({
  width: "350px",
  height: "460px",
  position: "relative",
  background: "#040717",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "10px",
  "&::before": {
    position: "absolute",
    width: "170%",
    height: "170%",
    content: '""',
    backgroundImage:
      "conic-gradient( transparent, transparent, transparent, #ee00ff )",
    animation: `${borderRotate} 6s linear infinite`,
  },
  "&::after": {
    position: "absolute",
    width: "170%",
    height: "170%",
    content: '""',
    backgroundImage:
      "conic-gradient( transparent, transparent, transparent, #00ccff )",
    animation: `${borderRotate} 6s linear infinite`,
    animationDelay: "-3s",
  },
}));

const borderRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [isNumber, setIsNumber] = useState(true);
  const [number, setNumber] = useState("");
  // const [otp, setOtp] = useState("");
  // const [confirmationResult, setConfirmationResult] = useState(null);

  const handleNumberSubmit = (mobileNumber) => {
    setIsNumber(false);
    setNumber(mobileNumber);
    handleSendCode(mobileNumber);
  };

  const handleOtpSubmit = (otp) => {
    handleVerifyCode(otp);
  };

  const handleSendCode = async (mobileNumber) => {
    try {
      // const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
        callback: (response) => {},
      });
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+91" + mobileNumber,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmation;
      // const confirmation = await firebase
      //   .auth()
      //   .signInWithPhoneNumber(mobileNumber);
      // setConfirmationResult(confirmation);
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const handleVerifyCode = async (otp) => {
    try {
      await window.confirmationResult.confirm(otp);
      console.log("Successfully signed in");
      window.localStorage.setItem("user-phone-number", number);
      navigate("/");
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0c1022",
      }}
    >
      <BaseContainer>
        {isNumber && <LoginForm goToOtp={handleNumberSubmit} />}
        {!isNumber && (
          <OtpForm
            number={number}
            goToNumber={() => setIsNumber(true)}
            handleOtpSubmit={handleOtpSubmit}
          />
        )}
      </BaseContainer>
      <div id="recaptcha"></div>
    </Box>
  );
};

export default Login;
