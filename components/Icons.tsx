import React from "react";
import type { PropsWithChildren } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

type IconProps = PropsWithChildren<{
  name: string;
  size?: number;
  color?: string;
  style? : object;
}>;

const FontAwesomeIcon = ({ name, size = 24, color = "#000" }: IconProps) => (
  <Icon name={name} size={size} color={color} />
);

const MaterialIcon = ({ name, size = 24, color = "#000" }: IconProps) => (
  <MaterialIcons name={name} size={size} color={color} />
);

const IonIcon = ({ name, size = 24, color = "#000" }: IconProps) => (
  <Ionicons name={name} size={size} color={color} />
);

const FeatherIcon = ({ name, size = 24, color = "#000" }: IconProps) => (
  <Feather name={name} size={size} color={color} />
);

const AntDesignIcon = ({ name, size = 24, color = "#000" }: IconProps) => (
  <AntDesign name={name} size={size} color={color} />
);

export {
  FontAwesomeIcon,
  MaterialIcon,
  IonIcon,
  FeatherIcon,
  AntDesignIcon,
};
