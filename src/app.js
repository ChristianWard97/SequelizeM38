const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        await sequelize.sync({alter: true});
        if (yargsObj.add) {
            // add movie to table
        await addMovie ({title: yargsObj.title, actor: yargsObj.actor});
        
    } else if (yargsObj.list) {
        // list movies in table
            await listMovie();

        } else if (yargsObj.update) {
           // update movie in table

        } else if (yargsObj.delete) {
            // delete movie in table
            await deleteMovie ({title:yargsObj.title});
            
        } else {
            console.log("incorrect command");
        }
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
};

app(yargs.argv);