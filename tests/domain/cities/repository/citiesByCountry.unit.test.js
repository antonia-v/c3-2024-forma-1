import {searchCitiesByCountryName} from '../../../../src/domain/cities/repository/worldCitiesRespository'

const country = "Chile"
const fakeCountry = "Anto"
const city = {
    country: "Chile",
    geonameid: 3868121,
    name: "Vi\u00f1a del Mar",
    subcountry: "Valpara\u00edso",
};

test("should return array with cities if country exists", () => {
    const result = searchCitiesByCountryName(country);

    expect(result).toContainEqual(city)
})

test("should return empty array if country does not exist", () => {
    const result = searchCitiesByCountryName(fakeCountry);

    expect(result).toEqual([]);

})