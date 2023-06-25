import app from "./server";
import * as dotenv from "dotenv";
dotenv.config();

app.listen(3244, () => {
    console.log("Server is running on port 3244");
});
