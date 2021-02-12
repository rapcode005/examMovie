const axios = require('axios');

exports.topMovies = (req, res) => {

    if(!req.query.api_key) {
        res.status(400).send({
            message: "Api_key can not be empty"
        });
        return;
    }

    const getMovies = () => {
        try {
            return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + req.query.api_key + '&language=en-US&page=1');
        } catch (error) {
            console.error(error);
        }
    }

    const movies = getMovies()
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(error => {
            console.log(error)
        });
};

exports.searchActor = (req, res) => {

    if(!req.query.api_key) {
        res.status(400).send({
            message: "Api key can not be empty!"
        });
        return;
    }
    
    if(!req.query.query) {
        res.status(400).send({
            message: "Actor can not be empty!"
        });
        return;
    }

    axios.get('https://api.themoviedb.org/3/search/person?api_key=' + req.query.api_key + '&language=en-US&query=' + req.query.query + '&page=1&include_adult=false')
        .then(response => {
        //if (response.data) {
            res.status(200).send(response.data);
        //}
        })
            .catch(error => {
            console.log(error)
        });
};

exports.searchMovie = (req, res) => {

    if(!req.query.api_key) {
        res.status(400).send({
            message: "Api key can not be empty!"
        });
        return;
    }
    
    if(!req.query.query) {
        res.status(400).send({
            message: "Movie can not be empty!"
        });
        return;
    }

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + req.query.api_key + '&language=en-US&query=' + req.query.query + '&page=1&include_adult=false')

     .then(response => {
        //if (response.data) {
            res.status(200).send(response.data);
        //}
        })
            .catch(error => {
            console.log(error)
        });
};

exports.getAllGenre = (req, res) => {
    if(!req.query.api_key) {
        res.status(400).send({
            message: "Api key can not be empty!"
        });
        return;
    }

    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + req.query.api_key + '&language=en-US')
     .then(response => {
        //if (response.data) {
            res.status(200).send(response.data);
        //}
        })
            .catch(error => {
            console.log(error)
        });
    
};

exports.searchGenre = (req, res) => {
    if(!req.query.api_key) {
        res.status(400).send({
            message: "Api key can not be empty!"
        });
        return;
    }
    
     if(!req.query.codeG) {
        res.status(400).send({
            message: "Genre code can not be empty!"
        });
        return;
    }


    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' + req.query.api_key + '&with_genres=' + req.query.codeG)
     .then(response => {
        //if (response.data) {
            res.status(200).send(response.data);
        //}
        })
            .catch(error => {
            console.log(error)
        });

};