import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

//Container layout
export const Container = styled.View`
  padding-top: ${10 + getStatusBarHeight()};
  height: 100%;
`;
