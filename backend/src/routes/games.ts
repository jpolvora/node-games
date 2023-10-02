import { Router } from "express"

export function init(): Router {
    const router = Router()

    return router
        .get("/", (_, res) => res.send("getGames route").end())
        .post("add-game", (_, res) => res.send("postGames route").end())
}