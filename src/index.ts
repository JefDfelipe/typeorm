import Database from "./core/database/connections/datababase";
import {routes} from './routes/category-routes'
import App from "./server";

Promise.all([new Database().openConnection()]).then(() => {
    const app = new App();
    app.start();
    app.routes(routes)
}).catch((e) => {
    console.error(e)
})