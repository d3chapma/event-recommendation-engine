# Install Deno

`brew install deno`

If that doesn't work, you can check out the
[install instructions](https://deno.land/#installation) for your system.

# Run Server

`deno run --allow-net server.ts`

# Exercise API

Point postman or browser to:

For residents:
  "http://localhost:8080/api/residents"

For programs:
  "http://localhost:8080/api/programs"

For recommendations:
  "http://localhost:8080/api/residents/<IdOfResident>/program-recommendations"
