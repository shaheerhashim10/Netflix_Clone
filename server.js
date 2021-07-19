const express = require('express');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());

let allMovies = require('./src/movies.json');
let moviesInACategory = [];

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/movies/:movieCategory', (req, res) => {
    const movies = allMovies.reduce((obj, movie) => {
        if ((movie.category == req.params.movieCategory)) {
            moviesInACategory.push(movie)
        }
        return moviesInACategory;
    }, {});
    res.json(movies);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
