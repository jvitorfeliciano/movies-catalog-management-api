import { Router } from "express";
import {
    addNewGenre /* , getAllGenre */,
} from /* countGenreApperance */ /* , deleteGenreById */ "../controllers/genresControllers.js";
import validateSchema from "../middlewares/genreMiddlewares.js";

const genreRouter = Router();

genreRouter.post("/genres", validateSchema, addNewGenre);
/* genreRouter.delete("/genres/:id", deleteGenreById); */
/* genreRouter.get("/genres", getAllGenres); */
/* genreRouter.get("/genres/amount", countGenreApperance); */

export default genreRouter;
