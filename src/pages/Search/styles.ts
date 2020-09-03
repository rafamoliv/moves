import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

//Container layout
export const Container = styled.View`
  padding-top: ${10 + getStatusBarHeight()};
  height: 100%;
`;

//Search and icon input
export const ViewInput = styled.View`
  border-radius: 5px;
  margin: 10px 12px;
  width: 100%;
  align-self: center;
  flex-direction: row;
`;

//Search input bar
export const ViewInputText = styled.TextInput`
  width: 88%;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff
  color: #000;
`;

//Icon
export const ButtonInput = styled.TouchableOpacity`
  margin: 5px;
`;

//Search results layout
export const SearchResults = styled.ScrollView`
  flex: 1;
`;

export const Banner = styled.TouchableOpacity`
  border: 1px solid #b5905f;
  border-radius: 5px;
  margin: 25px 15px 10px 30px
  height: 85%;
  width: 250px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const TitleMovie = styled.Text`
  font-size: 20px;
  margin: 10px 10px;
  color: #fff;
  font-family: "Roboto_400Regular";
  text-align: center;
  padding: 4px;
`;

export const TitleError = styled.Text`
  font-size: 25px;
  font-family: "Orbitron_700Bold";
  text-transform: uppercase;
  color: #b5905f;
  margin: 50px 0px;
  align-self: center;
`;
