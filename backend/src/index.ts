import 'dotenv/config'
import getApp from './app'
import { Express, Application } from 'express'

function startApp(app: Express): Promise<void> {
    const port = Number(process.env.PORT) || 3000
    app.set("PORT", port)

    return new Promise((resolve, reject) => {
        return app.listen(port)
            .once('listening', resolve)
            .once('error', reject)
    })
}

function stopApp(app: Application): void {
    console.info("app error")
}

(async () => {
    try {
        const app = await getApp()       
        app.on("error", stopApp)

        if (process.env.TEST_ERROR === "true") {
            setTimeout(() => {
                throw new Error("forcing app error")
            }, 4500);
        }

        await startApp(app)

        console.log("app running on PORT %d", app.get("PORT"))

    } catch (err) {
        console.error(err)
        console.log("gracefully shutting down...")
        setTimeout(() => {
            console.log("app ended")
        }, 3000);
    }

})()