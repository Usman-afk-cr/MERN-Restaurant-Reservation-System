import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
});