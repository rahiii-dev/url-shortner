import { Application } from "express";
import { errorHandler, notFoundHandler } from "../errorHandler";
import { userRoutes } from "./user.routes";

export function registerRoutes(app:Application, prefix="/api") {
    app.get(`${prefix}/health`, (req, res) => {
        res.json("Shortify Server is healthy 🚀")
    })

    app.use(`${prefix}/user`, userRoutes);
    
    app.use(notFoundHandler);
    app.use(errorHandler);
}