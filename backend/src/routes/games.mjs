import { Router } from "express"

export function init() {
    const router = Router()

    router.get("/", async (_, res) => {
        return res.send("getGames route").end()
    })

    return router
}