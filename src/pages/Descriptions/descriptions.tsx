import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import Lottie from "lottie-react-native"; // lottie to render json Lotties from After effects
import moves from "../../assets/icons/playGold.json"; // json Lottie
import { Container, MovieTitle, TitleDescriptionMovie, Banner, BannerMovie, BannerInfo, DescriptionMovie, DescriptionMovieRating } from "./styles";
import Header from "../../components/Header";
import api from "../../services/api";
import { API_KEY } from "../../../config.json";

//All datas used
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

export default function Descriptions() {
  const routes = useRoute();
  const routeMovieParams = routes.params as Params;
  const [movies, setMovies] = useState<Parameters>();

  useEffect(() => {
    api.get(`/?i=${routeMovieParams.imdbID}&apikey=${API_KEY}`).then(({ data }) => {
      setMovies(data);
    });
  }, [routeMovieParams.imdbID]);

  return (
    <Container>
      <Header />
      {movies ? (
        <Banner>
          <BannerMovie source={{ uri: movies.Poster }} />

          <BannerInfo>
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
