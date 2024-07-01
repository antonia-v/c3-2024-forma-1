import request from "supertest";
import { app, server } from "../../../../src/index";

const testCountry2 = "Gato";
const noResults = { message: "No se encontraron ciudades para el país ingresado" }

describe("GET /api/cities/by_country/:country", () => {
  afterAll(() => {
    server.close()
  })

  describe("country is a string with only letters and length >= 3", () => {
    describe("there are no results", () => {
      test("should return no cities message if country has both upper and lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${testCountry2}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(noResults);
      });

      test("should return no cities message if country is in lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${testCountry2.toLowerCase()}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(noResults);
      });

      test("should return no cities message if country is in upper case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${testCountry2.toUpperCase()}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(noResults);
      });
    })
  })
})
