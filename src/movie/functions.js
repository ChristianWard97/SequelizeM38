const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
            console.log(error)
    }};

    exports.listMovie = async (movieObj) => {
        try {
            const response = await Movie.findAll();
            console.log(response);
        }catch (error) {
            console.log(error);
        }
    };

    exports.deleteMovie = async (movieObj) => {
        try {
            const response = await Movie.destroy(movieObj);
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
    };