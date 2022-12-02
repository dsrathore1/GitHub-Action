import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config({ path: "config.env" });

const app = express();

const PORT = process.env.PORT || 8000;


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
});

app.listen(PORT, () => {
    console.log(`Your website is running on http://localhost:${PORT}`);
    setTimeout(() => {
        process.exit(0);
    }, 5000);
});