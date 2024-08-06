amplify pull --appId d3rkwsxzmwihmr --envName staging && amplify codegen && yarn ts-to-zod ./src/API.ts ./schema/generatedZodSchema.ts


nodemon app.js