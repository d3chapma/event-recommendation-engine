# Install Deno

`brew install deno`

If that doesn't work, you can check out the
[install instructions](https://deno.land/#installation) for your system.

# Run Server

`deno run --allow-net server.ts`

# Exercise API

Point postman or browser to:

## http://localhost:8080/api/residents

List of all residents

## http://localhost:8080/api/residents/:id

Details for specific resident

## http://localhost:8080/api/residents/:id/programs/attended

List of programs attended by specific resident

## http://localhost:8080/api/residents/:id/programs/recommended

List of three programs recommended for specific resident

The three programs:

1. attended in the past and matches the resident's most popular dimension
2. attended in the past and matches the resident's second most popular dimension
3. not attended in the past and matches the resident's most popular dimension

## http://localhost:8080/api/programs

List of all programs

## http://localhost:8080/api/programs/:id

Details for specific program
