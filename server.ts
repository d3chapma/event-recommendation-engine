import {
  Application,
  httpErrors,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { findResidentById, residents } from "./models/Resident.ts";
import {
  findProgramById,
  programs,
  programsAttendedByResidentId,
} from "./models/Program.ts";
import { recommendedProgramsForResident } from "./models/Recommendation.ts";

const router = new Router();

router.get("/api/residents", (ctx) => {
  ctx.response.body = residents;
});

router.get("/api/residents/:id", (ctx) => {
  const id = ctx.params.id;

  const resident = findResidentById(id);

  if (resident) {
    ctx.response.body = resident;
  } else {
    throw new httpErrors.NotFound(`Resident not found with userId: ${id}`);
  }
});

router.get("/api/residents/:id/attended-programs", (ctx) => {
  const id = ctx.params.id;

  ctx.response.body = programsAttendedByResidentId(id);
});

router.get("/api/residents/:id/recommended-programs", (ctx) => {
  const id = ctx.params.id;

  ctx.response.body = recommendedProgramsForResident(id);
});

router.get("/api/programs", (ctx) => {
  ctx.response.body = programs;
});

router.get("/api/programs/:id", (ctx) => {
  const id = ctx.params.id;

  const program = findProgramById(id);

  if (program) {
    ctx.response.body = program;
  } else {
    throw new httpErrors.NotFound(`Program not found with id: ${id}`);
  }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
