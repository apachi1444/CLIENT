import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Field from "../signUp/Field";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import pager from "../../../../../redux/actions/pager";
import user from "../../../../../redux/actions/user";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Processing from "../signUp/Processing";
import "../signUp/signUp.css";
import getUrl from "../../../../../logic/utils/urls";

function SignIn() {
  const [pass, emai] = [
    localStorage.getItem("Password"),
    localStorage.getItem("Email"),
  ];
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isMounted, setMounted] = useState(false);
  const [signal, setSignal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [signData, setSignData] = useState({
    email: emai ? emai : "",
    password: pass ? pass : "",
  });

  useEffect(() => {
    setMounted(true);

    const getData = async () => {
      setProcessing(true);
      try {
        const { data } = await axios.post(
          getUrl(true, "api/users/signin"),
          signData
        );
        if (!data.error) {
          dispatch(user(data.data));
          if (data.data.mode) dispatch(pager("admin"));
          else dispatch(pager("core"));

          // dispatch(socket(socketIo));
        } else {
          if (isMounted) setError(data.message);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      }
      setProcessing(false);
    };
    getData();
    return () => {
      setMounted(false);
    };
  }, [signal]);

  const loginHandler = (e) => {
    e.preventDefault();
    setSignal(!signal);
  };

  return (
    <motion.form
      className="sign-up"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="avatar">
        <input type="file" id="ava" />
        <label htmlFor="ava" className="avatar">
          <PermIdentityIcon />
        </label>
        <p>Add Profile Picture</p>
      </div>
      <Field
        icon={<MailOutlineIcon />}
        label={"Email"}
        isEmail={true}
        value={signData.email}
        cb={(e) => setSignData({ ...signData, email: e.target.value })}
      />
      <Field
        icon={<LockOpenIcon />}
        label={"Password"}
        isPassword={true}
        value={signData.password}
        cb={(e) => setSignData({ ...signData, password: e.target.value })}
      />

      <div onClick={() => dispatch(pager("signup"))} className="have-account">
        Don't Have An Account?!
      </div>
      <div className="forgot-password">Forgot Password?!</div>
      <button type="submit" className="signning" onClick={loginHandler}>
        Sign Up
      </button>
      <h6>Or Sign Up With</h6>
      <div className="o-auth">
        <div className="google">
          <GoogleIcon style={{ fill: "#4885ed" }} />
        </div>
        <div className="facebook">
          <FacebookIcon style={{ fill: "#3b5998" }} />
        </div>
        <div className="github">
          <GitHubIcon style={{ fill: "#171515" }} />
        </div>
        <div className="twitter">
          <TwitterIcon style={{ fill: "#00acee" }} />
        </div>
      </div>
      {!processing ? (
        <p className="response-error">{error}</p>
      ) : (
        <Processing flag={processing} width={100} />
      )}
    </motion.form>
  );
}

export default SignIn;
