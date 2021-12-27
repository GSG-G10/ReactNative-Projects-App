import React, { FC } from "react";
import { Text } from "react-native-elements";

type TextComponentProps = {
  value: String;
  style?: Object;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  p?: boolean;
};
export const TextComponent: FC<TextComponentProps> = ({
  value,
  ...rest
}: TextComponentProps) => <Text {...rest}>{value}</Text>;