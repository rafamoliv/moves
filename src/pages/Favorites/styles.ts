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
  flex-direction: row;
  margin-vertical: 10;
  border: 1px solid #b5905f;
  border-radius: 5px;
`;

export const BannerImage = styled.Image`
  width: 100px;
  height: 130px;
  border-radius: 5px;
`;

export const TextFeed = styled.View`
  width: 65%;
  height: 100px;
  margin-left: 16;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20;
  font-weight: bold;
`;

export const Year = styled.Text`
  font-size: 16;
  margin-top: 8;
  color: #ccc;
`;

export const Rating = styled.Text`
  color: rgb(230, 203, 35);
  font-size: 12;
`;

export const TitleError = styled.Text`
  font-size: 25px;
  font-family: "Orbitron_700Bold";
  text-transform: uppercase;
  color: #b5905f;
  margin: 50px 0px;
  align-self: center;
`;
