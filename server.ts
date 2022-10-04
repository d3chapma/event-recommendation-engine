import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/api/residents/:id", (ctx) => {
  ctx.response.body = {
    test: ctx.params.id
  };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
