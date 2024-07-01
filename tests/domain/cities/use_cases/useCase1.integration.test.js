import request from "supertest";
import { app, server } from "../../../../src/index";
import citiesRepository from "../../../../src/domain/cities/repository/worldCitiesRespository";

const testCountry = "Chile";

describe("GET /api/cities/by_country/:country", () => {
  afterAll(() => {
    server.close()
  })

  describe("country is a string with only letters and length >= 3", () => {
    describe("results exist", () => {
      test("country has both upper and lower case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${testCountry}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
          citiesRepository.searchCitiesByCountryName(testCountry)
        );
      });

      test("country is in lower case", async () => {
        const response = await request(app.callback()).get(
        `/api/cities/by_country/${testCountry.toLowerCase()}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
          citiesRepository.searchCitiesByCountryName(
            testCountry.toLowerCase()
          )
        );
      });

      test("country is in upper case", async () => {
        const response = await request(app.callback()).get(
          `/api/cities/by_country/${testCountry.toUpperCase()}`
        );

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
          citiesRepository.searchCitiesByCountryName(
            testCountry.toUpperCase()
          )
        );
      });
    })
  })
})
