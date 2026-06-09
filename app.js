import authRouter from "./routes/authRoute.js";
import adminRouter from "./routes/adminRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import menuRouter from "./routes/menuRoute.js";

const app = express();

dotenv.config();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// IMPORTANT: body parser routes se pehle
app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

// Routes
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/menu", menuRouter);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

app.use(errorMiddleware);

export default app;