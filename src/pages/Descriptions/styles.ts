import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-status-bar-height";

//container descriptions
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${10 + getStatusBarHeight()};
  height: 100%;
`;

export const Banner = styled.ScrollView`
  flex: 1;
  margin top: 8px;
`;

export const BannerMovie = styled.Image`
  width: 100%;
  height: 480px;
  border: 1px solid #b5905f;
  border-radius: 5px;
`;

export const FavoriteHeart = styled.TouchableOpacity`
  position: absolute;
  margin-top: 10px
  right: 10;
`;

export const UnFavoriteHeart = styled.TouchableOpacity`
  position: absolute;
  margin-top: 10px
  right: 10;
`;

export const BannerInfo = styled.View`
  justify-content: space-around;
  flex-direction: column;
  margin: 5%;
  border-radius: 6px;
`;

export const MovieTitle = styled.Text`
  font-size: 30px;
  text-align: center
  margin: 10px 15px 10px;
  align-self: center;
  color: #b5905f;
  font-family: "Orbitron_700Bold";
`;

export const TitleDescriptionMovie = styled.Text`
  font-size: 14px;
  margin: 2px 8px 2px;
  color: #b5905f;
  padding: 5px;
  font-family: "Orbitron_400Regular";
`;

export const DescriptionMovie = styled.Text`
  font-size: 16px;
  margin: 2px 8px 2px;
  color: #f2f3f4;
  padding: 5px;
  font-family: "Roboto_400Regular";
`;

export const DescriptionMovieRating = styled.Text`
  font-size: 22px;
  margin: 2px 8px 2px;
  color: rgb(230, 203, 35);
  padding: 5px;
  font-family: "Roboto_400Regular";
`;

export const AdMobBanner = styled.View`
  align-items:   center;
`;
