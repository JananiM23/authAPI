import express, { Request, Response} from "express";
import router from "./routes/user.router";
import Connection from "./dbConnection";
import "dotenv/config";


const app = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/', (req:Request, res:Response) => {
    res.send("Welcome to the website");
})

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

app.use('/app', router);