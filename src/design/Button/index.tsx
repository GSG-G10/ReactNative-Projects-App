import { FC } from "react";
import { Button } from "react-native-elements";
// eslint-disable-next-line import/namespace
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
  containerStyle: {
    width: 180,
  },
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    height: 60,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 4,
  },
});

type ButtonProps = {
  title: string;
  containerStyle?: object;
  buttonStyle?: object;
  titleStyle?: object;
  loading: boolean;
  onPress: () => void;
};
export const ButtonComponent: FC<ButtonProps> = ({
  title,
  containerStyle,
  buttonStyle,
  titleStyle,
  loading,
  onPress,
}) => {
  return (
    <Button
      title={title}
      titleStyle={titleStyle || styles.titleStyle}
      containerStyle={containerStyle || styles.containerStyle}
      buttonStyle={buttonStyle || styles.buttonStyle}
      loading={loading}
      onPress={onPress}
    />
  );
};
