import { Router } from "express"

export function init(): Router {
    const router = Router()

    return router
        .get("/", (_, res) => res.send("hello world"))
        .get("/info", (_, res) => res.send("info route").end())
        .get("/get404", (_, res) => res.sendStatus(404).end())
        .get("/get201", (_, res) => res.sendStatus(201).end())
}