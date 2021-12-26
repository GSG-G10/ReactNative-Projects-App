import React, { FC } from "react";
import { Text as RNText } from "react-native-elements";

const typographies = {
  h1: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
  }, // header
  h2: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
  }, // subheader
  h3: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 28,
  }, // subheader
  p1: {
    fontSize: 18,
    lineHeight: 24,
  }, // text
  p2: {
    fontSize: 16,
    lineHeight: 22,
  }, // subtitle
};

const colors = {
  "black": "#000",
  "white": "#fff",
  "blue": "#00f",
  "red": "#f00",
  "green": "#0f0",
};

type TextComponentProps = {
  value: String;
  style?: Object;
  typography?: String;
  color?: String;
  onPress?: any;
};

export const Text: FC<TextComponentProps> = ({ color = "black", onPress = () => {}, style = {}, typography = "p1", value = "ERROR" }: TextComponentProps) => {
  const defaultStyles = {
    ...(typographies[typography]),
    color: colors[color],
  };
  return <RNText onPress={onPress} style={[defaultStyles, style]}>{value}</RNText>;
};
