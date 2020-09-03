import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { ViewInput, ViewInputText, SearchResults, ButtonInput, BannerImage, Container, Banner, TitleMovie, TitleError } from "./styles";
import Header from "../../components/Header";

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

  useEffect(() => {
    if (searchText === " ") {
      return;
    }
    axios.get(`https://www.omdbapi.com/?s=${searchText}&apikey=972e1325`).then(({ data }) => {
      setMovie(data.Search);
    });
  }, [searchText]);

  function movieDetail(imdbID: string) {
    navigation.navigate("Descriptions", {
      imdbID: imdbID,
    });
  }

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
          maxLength={30}
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
    </Container>
  );
}
