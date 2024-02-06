import express, { Express } from 'express';
import cors from "cors"; 

const app: Express = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors);

app.get("/api", (req, res) => {
    res.json({
        message: "Connected to your automated barista",
    });
});

app.listen(port, () => {
    console.log(`Server running - port 4000`);
});
