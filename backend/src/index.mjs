import express from "express"
import * as games from "./routes/games.mjs"

async function start() {
    const app = express()

    app.get("/", (_, res) => {
        return res.send("hello")
    })

    const gameRoutes = games.init()
    app.use("/games", gameRoutes)

    return await listen(app)
}

function listen(app) {
    return new Promise((resolve, reject) => {
        const port = Number(process.env.PORT) || 3002

        //return reject(new Error("..."))

        return app.listen(port)
            .once('listening', resolve)
            .once('error', reject);
    })
}

start()
    .then((app) => console.log("started... %s", app))
    .catch(console.log.bind(console))