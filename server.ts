import {
  Application,
  httpErrors,
  Router,
} from "https://deno.land/x/oak/mod.ts";
import { programs, residents } from "./data.ts";

const router = new Router();

router.get("/api/residents", (ctx) => {
  ctx.response.body = residents;
});

router.get("/api/residents/:id", (ctx) => {
  const id = ctx.params.id;

  const resident = residents.find((resident) => resident.userId === id);

  if (resident) {
    ctx.response.body = resident;
  } else {
    throw new httpErrors.NotFound(`Resident not found with userId: ${id}`);
  }
});

router.get("/api/programs", (ctx) => {
  ctx.response.body = programs;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
