import { GenresEntity } from "./genres";

interface MoviesEntity {
    id: number;
    title: string;
    poster_picture: string;
    description: string;
}

interface Movie {
    title: string;
    poster_picture: string;
    description: string;
    genre_ids: number[];
}

interface MovieInformations extends MoviesEntity {
    genres: GenresEntity[];
}

export { MoviesEntity, Movie, MovieInformations };
