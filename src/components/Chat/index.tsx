/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from "react";
import { DefaultRootState, useSelector } from "react-redux";

import { GiftedChat } from "react-native-gifted-chat";

import { renderMessages, sendMessage } from "../../api";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const { userAuth }: any = useSelector((state: DefaultRootState) => state);

  useEffect(() => {
    renderMessages(setMessages);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    sendMessage({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userAuth.value.id,
        avatar: "https://i.pravatar.cc/300",
        name: userAuth.value.email.split("@")[0],
      }}
    />
  );
};
export default Chat;
