import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./Routes/routes.js";

dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Your website is running on http://localhost:${PORT}`);
    setTimeout(() => {
        process.exit(0);
    }, 5000);
});