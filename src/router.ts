import { Router, Request, Response } from 'express';
import { createMovie,
         findMovieById,
         getAllMovie,
         removeMovie,
         updateMovie } from './controllers/movieController';

//validation

import { validate } from './middleware/handleValidation';
import { movieCreateValidation } from './middleware/movieValidation';

const router = Router();

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API working")
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovie)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id",movieCreateValidation(), validate, updateMovie)