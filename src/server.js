import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorMiddleware from './middlewares/error.middleware.js';
import routes from './module/routes.js';

dotenv.config()

const PORT = process.env.PORT || 9090;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorMiddleware);

app.all("/*", (req, res) => {
  res.status(404).json({
    message: req.url + " not found",
    status: 404,
  });
});

app.listen(PORT, console.log(PORT));