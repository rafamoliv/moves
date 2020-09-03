import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Lottie from "lottie-react-native"; // lottie to render json Lotties from After effects
import axios from "axios";
import moves from "../../assets/icons/playGold.json"; // json Lottie
import { Container, TitleDescriptionMovie, DescriptionMovieRating, Banner, BannerMovie, TitleMovie, DescriptionMovie, BannerInfo } from "./styles";
import Header from "../../components/Header";

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
}

const Descriptions = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const routeMovieParams = routes.params as Params;
  const [movies, setMovies] = useState<Parameters>();

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${routeMovieParams.imdbID}&apikey=972e1325`).then(({ data }) => {
      setMovies(data);
    });
  }, [routeMovieParams.imdbID]);

  function movesBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header />
      {movies ? (
        <Banner>
          <BannerMovie source={{ uri: movies.Poster }} />

          <BannerInfo>
            <TitleMovie>{movies.Title}</TitleMovie>
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
};

export default Descriptions;
