import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  padding-top: ${10 + getStatusBarHeight()};
`;

export const Teste = styled.Text`
  color: #fff;
`;
