import { FC } from "react";
import { Icon } from "react-native-elements";

type ButtonsComponentProps = {
  onPress?: () => void;
  iconName: string;
  color: string;
  style?: object;
  raised: boolean;
};

export const IconComponent: FC<ButtonsComponentProps> = ({
  onPress,
  iconName,
  color,
  raised,
  ...rest
}) => (
  <Icon
    raised={raised}
    name={iconName}
    type="ant-design"
    color={color}
    onPress={onPress}
    {...rest}
  />
);
