import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { ViewInput, ViewInputText, SearchResults, ButtonInput, BannerImage, Container, Banner, TitleMovie, TitleError } from "./styles";
import Header from "../../components/Header";
import api from "../../services/api";
import { API_KEY } from "../../../config.json";
import {
  AdMobBanner,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

interface Post {
  Title: string;
  imdbID: string;
  Poster: string;
}

export default function Search() {
  const [searchText, setSearchText] = useState("black panther");
  const [movie, setMovie] = useState<Post[]>([]);
  const navigation = useNavigation();
  const [value, onChangeText] = React.useState("");

  //get api
  useEffect(() => {
    if (searchText === " ") {
      return;
    }
    api.get(`/?s=${searchText}&apikey=${API_KEY}`).then(({ data }) => {
      setMovie(data.Search);
    });
  }, [searchText]);

  //go to details
  function movieDetail(imdbID: string) {
    navigation.navigate("Descriptions", {
      imdbID: imdbID,
    });
  }

  //set Search
  function submitSearch() {
    if (value !== "") {
      setSearchText(value);
    } else {
      setSearchText("black panther");
    }
  }

  return (
    <Container>
      <Header />
      {/* Search input and Search-icon */}
      <ViewInput>
        <ViewInputText
          placeholder="Search a Movie, Series or Game"
          autoCorrect={false}
          onChangeText={(text) => onChangeText(text)}
          onSubmitEditing={submitSearch}
          onKeyPress={submitSearch}
          value={value}
        />
        <ButtonInput onPress={submitSearch}>
          <FontAwesome name="search" size={35} color="#FFF" />
        </ButtonInput>
      </ViewInput>

      {/* Tags films */}
      <SearchResults horizontal>
        {movie ? (
          movie.map((movie) => (
            <Banner key={movie.imdbID} onPress={() => movieDetail(movie.imdbID)}>
              <BannerImage source={{ uri: movie.Poster }} />
              <TitleMovie>{movie.Title}</TitleMovie>
            </Banner>
          ))
        ) : (
          <TitleError>Movie not found</TitleError>
        )}
      </SearchResults>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-2851827333967207/9231273989" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={ (err => console.log) } />
    </Container>
  );
}
