import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import browser from "./../../../../../../redux/actions/browser";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import useClickOutside from "../../../../../../logic/algorithms/hooks/useClickOutside";
import "./controller.css";

function Controller({ isFriend, posterName, isMe }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  let nodeRef = useClickOutside(toggle);
  return (
    <div className="controller">
      <div className="controller-icon" onClick={toggle}>
        {open ? <ExpandLessOutlinedIcon /> : <MoreHorizOutlinedIcon />}
      </div>
      <div className="controller-ops">
        {open && (
          <motion.ul
            className="actions"
            initial={{ x: "30vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            ref={nodeRef}
          >
            {isMe ? (
              <>
                <li className="action">
                  <ShareOutlinedIcon />
                  <h3>Share Post</h3>
                </li>
                <li className="action">
                  <PostAddOutlinedIcon />
                  <h3>Mute Post</h3>
                </li>
                <li className="action">
                  <VisibilityOffOutlinedIcon />
                  <h3>Hide From Profile</h3>
                </li>
                <li className="action">
                  <DeleteOutlinedIcon />
                  <h3>Delete Post</h3>
                </li>
              </>
            ) : (
              <>
                <li
                  className="action"
                  onClick={() => dispatch(browser("profile"))}
                >
                  <AccountBoxOutlinedIcon />
                  <h3>{posterName}'s Profile</h3>
                </li>
                <li className="action">
                  {!isFriend ? (
                    <InsertLinkOutlinedIcon />
                  ) : (
                    <MarkChatUnreadOutlinedIcon />
                  )}
                  <h3>
                    {!isFriend
                      ? `Connect to ${posterName}`
                      : `Message ${posterName}`}
                  </h3>
                </li>
                <li className="action">
                  <NotificationsOutlinedIcon />
                  <h3>Follow {posterName}</h3>
                </li>
                <li className="action">
                  <NotificationsOffOutlinedIcon />
                  <h3>Unfollow {posterName}</h3>
                </li>
              </>
            )}
          </motion.ul>
        )}
      </div>
    </div>
  );
}

Controller.defaultProps = {
  isFriend: false,
  posterName: "Jordan B",
  isMe: false,
};
export default Controller;
