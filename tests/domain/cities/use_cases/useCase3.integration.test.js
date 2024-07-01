import request from "supertest";
import { app, server } from "../../../../src/index";


const alphaNumCountry = "Chile123";
const numCountry = "2434";
const noNums = { message: "Solo se aceptan caracteres no numéricos" };

describe("GET /api/cities/by_country/:country", () => {
  afterAll(() => {
    server.close();
  });

  describe("country is a string with length >= 3", () => {
    describe("country has alphanumeric characters", () => {
      test("country has both upper and lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${alphaNumCountry}`
        );

        expect(response.status).toBe(400);
        expect(response.body).toEqual(noNums);
      });

      test("country is in lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${alphaNumCountry.toLowerCase()}`
        );

        expect(response.status).toBe(400);
        expect(response.body).toEqual(noNums);
      });

      test("country is in upper case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${alphaNumCountry.toUpperCase()}`
        );

        expect(response.status).toBe(400);
        expect(response.body).toEqual(noNums);
      });
    });
    describe("country has only numeric characters", () => {
      test("country has both upper and lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${numCountry}`
        );

        expect(response.status).toBe(400);
        expect(response.body).toEqual(noNums);
      });

      test("country is in lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${numCountry.toLowerCase()}`
        );

        expect(response.status).toBe(400);
        expect(response.body).toEqual(noNums);
      });

      test("country is in upper case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${numCountry.toUpperCase()}`
        );

        expect(response.status).toBe(400);
        expect(response.body).toEqual(noNums);
      });
    });
  });
});
