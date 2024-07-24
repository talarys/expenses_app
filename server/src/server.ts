import { Hono } from "hono"
import { logger } from "hono/logger"
import { expenses } from "./routes/expenses"

const app = new Hono()

app.use(logger())

app.get("/", c => c.text("Hello Hono!!!"))

app.route("/expenses", expenses)

const server = Bun.serve({
  fetch: app.fetch
});

console.log(`Listening on localhost:${server.port}`);
