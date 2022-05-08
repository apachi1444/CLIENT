import React from "react";
import "./messanger.css";
import Messages from "./messages/Messages";
import Notifications from "./notifications/Notifications";
import Requests from "./requests/Requests";
import Videos from "./videos/Videos";
import Audios from "./audios/Audios";

function Messanger({ on, current }) {
  if (!on) return <></>;
  return (
    <div className="messanger">
      {current === "notifications" ? (
        <Notifications />
      ) : current === "requests" ? (
        <Requests />
      ) : current === "videos" ? (
        <Videos />
      ) : current === "audios" ? (
        <Audios />
      ) : (
        <Messages />
      )}
    </div>
  );
}

Messanger.defaultProps = {
  on: false,
  current: "messages",
};
export default Messanger;
