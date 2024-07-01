import request from "supertest";
import {app, server} from "../../../../src/index"

const shortCountry = "ch"
const tooShort = { message: "El país/ciudad ingresado debe tener al menos 3 caracteres" }


describe("country has length < 3", () => {
  afterAll(() => {
    server.close();
  });

  describe("GET /api/cities/by_country/:country", () => {
    test("should return length message",  async () => {
      const response = await request(app.callback()).get(
        `/api/cities/by_country/${shortCountry}`
      );

      expect(response.status).toBe(400);
      expect(response.body).toEqual(tooShort);
    });
  })
  
  describe("GET /api/city/:city/country/:country", () => {
    test("should return length message", async () => {
      const response = await request(app.callback()).get(
        `/api/city/${shortCountry}/country/${shortCountry}`
      );

      expect(response.status).toBe(400);
      expect(response.body).toEqual(tooShort);
    });
  })
});