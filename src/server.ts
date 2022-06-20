import express from 'express'

export default class App {
    readonly express: express.Express

    constructor() {
        this.express = express()
    }

    start(port: number | string = 8080) {
        this.express.use(express.json())
        this.express.listen(process.env.PORT || port, () => console.log('Running...'))
    };

    routes(route) {
        this.express.use(route)
    };
}