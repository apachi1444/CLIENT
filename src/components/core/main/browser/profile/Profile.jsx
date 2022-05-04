import React from "react";
import Info from "./info/Info";
import Posts from "./posts/Posts";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getUrl, isProduction } from "../../../../../logic/utils/urls";
import "./profile.css";

function Profile({ mode }) {
  const { foreGroundImage } = useSelector((state) => state.user);
  return (
    <motion.div
      className="profile"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Info
        mode={mode}
        imgUrl={
          foreGroundImage
            ? getUrl(isProduction, `images/avatars/${foreGroundImage}`)
            : getUrl(isProduction, "images/unkown/boyavatar.jpg")
        }
      />
      <h4 className="all-posts">All Posts(17)</h4>
      <Posts mode={mode} />
    </motion.div>
  );
}

Profile.defaultpProps = {
  mode: false,
};
export default Profile;
