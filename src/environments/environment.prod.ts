export const environment = {
  production: true,
  backend: {
    baseUrl: 'http://10.2.149.78:8080/',
    mockUrl: 'http://localhost:3000/',
    endpoints: {
      login: 'api/v0/authentication/login/',
      signup: 'api/v0/authentication/signup/',
      itineraries: 'api/v0/itinerarys/',
      users: 'api/v0/users/',
      geolocations: 'geolocations'
    }
  }
};
