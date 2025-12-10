// server.mts
import { createServer } from "https";
import { readFileSync } from "fs";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

// cert files (frontend/cert/)
const keyPath = path.join(process.cwd(), "cert", "localhost-key.pem");
const certPath = path.join(process.cwd(), "cert", "localhost.pem");

const httpsOptions = {
  key: readFileSync(keyPath),
  cert: readFileSync(certPath),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(3000, () => {
    console.log("Server running: https://localhost:3000");
  });
});
