import express, { Request, Response} from "express";
import router from "./routes/common.router";
import Connection from "./dbConnection";


const app = express();
const port = 5000;

app.use(express.json());

Connection.once("open", () =>{
    try {
        console.log(`Database connected`)
    } catch (error) {
        console.log(`something went wrong`)
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`, `http://localhost:${port}`);
})

app.use('/app/v1', router);