import citiesRepository from '../repository/worldCitiesRespository'

exports.getAllCitiesUseCase = (ctx) => {
    ctx.body = citiesRepository.getAllCitiesRepository()
    return ctx
}

exports.getCitiesByCountryUseCase = (ctx) => {
    const country = ctx.params.country

    if (country.length < 3) {
        ctx.status = 400
        ctx.body = { message: "El país/ciudad ingresado debe tener al menos 3 caracteres" }
        return ctx
    }

    if (!/^[a-zA-Z]+$/.test(country)) {
        ctx.status = 400
        ctx.body = { message: "Solo se aceptan caracteres no numéricos" };
        return ctx
    }

    const cities = citiesRepository.searchCitiesByCountryName(country)
    ctx.body = cities

    if (cities.length === 0) {
        ctx.body = { message: "No se encontraron ciudades para el país ingresado" }
    }
    return ctx
}

exports.getCitiesByCityNameAndCountryUseCase = (ctx) => {
    const city = ctx.params.city
    const country = ctx.params.country

    if (country.length < 3 || city.length < 3) {
        ctx.status = 400
        ctx.body = { message: "El país/ciudad ingresado debe tener al menos 3 caracteres" }
        return ctx
    }
    ctx.body = citiesRepository.searchCityByCityNameAndCountry(city, country)
    return ctx
}