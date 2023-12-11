import dotenv from "dotenv";
import Server from "./server";
import Main from "./routes/main";

dotenv.config();
const mainRoute = new Main();

const server = new Server([mainRoute]);

server.listen();
