import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Lottie from "lottie-react-native"; // lottie to render json Lotties from After effects
import axios from "axios";
import moves from "../../assets/icons/playGold.json"; // json Lottie
import {
  Container,
  MovieTitle,
  TitleDescriptionMovie,
  Banner,
  BannerMovie,
  BannerInfo,
  FavoriteHeart,
  UnFavoriteHeart,
  DescriptionMovie,
  DescriptionMovieRating,
} from "./styles";
import Header from "../../components/Header";
import { AsyncStorage } from "react-native";

//All datas used this page
interface Parameters {
  imdbID: string;
  Poster: string;
  Title: string;
  Production: string;
  Plot: string;
  Released: string;
  Language: string;
  Genre: string;
  Actors: string;
  Director: string;
  Awards: string;
  Runtime: string;
  imdbRating: string;
}

//Params ID
interface Params {
  imdbID: string;
  favorite: string;
}

export default function Descriptions() {
  const routes = useRoute();
  const routeMovieParams = routes.params as Params;
  const [movies, setMovies] = useState<Parameters>();
  const [favorite, setFavorite] = useState<string>();

  const save = async () => {
    try {
      await AsyncStorage.setItem("favorites", favorite as string);
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      const favorite = await AsyncStorage.getItem("favorites");

      if (favorite !== null) {
        setFavorite(favorite);
      }
    } catch (err) {
      alert(err);
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("favorites");
    } catch (err) {
      alert(err);
    } finally {
      setFavorite("");
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${routeMovieParams.imdbID}&apikey=972e1325`).then(({ data }) => {
      setMovies(data);
    });
  }, [routeMovieParams.imdbID]);

  return (
    <Container>
      <Header />
      {movies ? (
        <Banner>
          <BannerMovie source={{ uri: movies.Poster }} />
          <>
            {/* <FavoriteHeart onPress={() => remove()}>
              <Ionicons name="ios-heart" size={50} color="#a83f39" />
            </FavoriteHeart> */}

            <UnFavoriteHeart onPress={() => save()}>
              <Ionicons name="ios-heart" size={50} color="#fff" />
            </UnFavoriteHeart>
          </>

          <BannerInfo>
            <DescriptionMovieRating>{favorite}</DescriptionMovieRating>
            <MovieTitle>{movies.Title}</MovieTitle>
            <DescriptionMovie> {movies.Plot}</DescriptionMovie>
            <TitleDescriptionMovie>Producer:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Production}</DescriptionMovie>
            <TitleDescriptionMovie>Release date:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Released}</DescriptionMovie>
            <TitleDescriptionMovie>Languages:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Language}</DescriptionMovie>
            <TitleDescriptionMovie>Genrer:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Genre}</DescriptionMovie>
            <TitleDescriptionMovie>Director:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Director}</DescriptionMovie>
            <TitleDescriptionMovie>Actors:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Actors}</DescriptionMovie>
            <TitleDescriptionMovie>Awards:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Awards}</DescriptionMovie>
            <TitleDescriptionMovie>Running time:</TitleDescriptionMovie>
            <DescriptionMovie> {movies.Runtime}</DescriptionMovie>
            <TitleDescriptionMovie>IMDB rating:</TitleDescriptionMovie>
            <DescriptionMovieRating>{`★ ${movies.imdbRating}`}</DescriptionMovieRating>
          </BannerInfo>
        </Banner>
      ) : (
        <Lottie source={moves} resizeMode="contain" autoSize autoPlay loop />
      )}
    </Container>
  );
}
