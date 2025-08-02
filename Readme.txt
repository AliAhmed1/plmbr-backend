amplify pull --appId <app-id> --envName staging && amplify codegen && yarn ts-to-zod ./src/API.ts ./schema/generatedZodSchema.ts


nodemon app.js
