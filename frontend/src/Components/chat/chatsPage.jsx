import React from "react";
import PropTypes from "prop-types";
import "./chatPage.css";
import { Link } from "react-router-dom";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "55009d15-aff0-4e2b-9490-737c5c68defa",
    props.user.username,
    props.user.secret
  );

  return (
    <div className="chatpage">

      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} />
      </div>

      <Link to="/agent" className="logout-link">
        <button className="btn-logout">Leave Chat</button>
      </Link>
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
