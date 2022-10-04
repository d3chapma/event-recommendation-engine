import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { programs, residents } from "./data.ts";

const router = new Router();

router.get("/api/residents", (ctx) => {
  ctx.response.body = residents;
});

router.get("/api/programs", (ctx) => {
  ctx.response.body = programs;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
