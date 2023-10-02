import express, { Express } from "express"
import * as routes from "./routes/index"

/**
 * Creates a ready to start Express app
 * @returns Express
 */
export default async function getApp(): Promise<Express> {
    
    const app = express()    

    app.use("/", routes.root.init())
    app.use("/games", routes.games.init())
    

    return app;
}