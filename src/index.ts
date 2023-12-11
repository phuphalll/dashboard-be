import dotenv from "dotenv";
import Server from "./server";
import Main from "./routes/main";
import Sales from "./routes/sales";

dotenv.config();
const mainRoute = new Main();
const salesRoute = new Sales();

const server = new Server([mainRoute, salesRoute]);

server.listen();
