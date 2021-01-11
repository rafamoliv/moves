import React from "react";
import { Linking } from "react-native"; // linking to open URL's
import Lottie from "lottie-react-native"; // lottie to render json Lotties from After effects
import { Container, NameMoves, LandBody, ColumnIcons, SpaceToRight, SpaceToLeft, AdMobBannerDown } from "./styles";

import moves from "../../assets/icons/playGold.json"; // json Lottie
import { FontAwesome } from "@expo/vector-icons"; // icons from fontawesome

import {
  AdMobBanner,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default function Landing() {
  const githubURL = "https://github.com/rafamoliv"; // git URL
  const linkedinURL = "https://www.linkedin.com/in/rafamoliv/"; // linkedin URL

  return (
    <Container>
      {/* Principal container */}
      <Lottie source={moves} resizeMode="contain" autoSize autoPlay loop={false} />
      {/* LOGO render from lottie json */}
      <NameMoves>MOVES</NameMoves>
      <LandBody>
        {/* Body landing */}
        <ColumnIcons>
          {/* Icons in columns */}
          <SpaceToRight
            onPress={() => {
              Linking.openURL(githubURL);
            }}
          >
            <FontAwesome name="github-square" size={50} color="#b5905f" />
          </SpaceToRight>
          <SpaceToLeft
            onPress={() => {
              Linking.openURL(linkedinURL);
            }}
          >
            <FontAwesome name="linkedin-square" size={50} color="#b5905f" />
          </SpaceToLeft>
        </ColumnIcons>
      </LandBody>

      <AdMobBannerDown>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-2851827333967207/9231273989" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={ (err => console.log) } />
      </AdMobBannerDown>
    </Container>
  );
}
