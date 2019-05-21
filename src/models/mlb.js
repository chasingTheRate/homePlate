
export default {
  mlbApi: {
    baseUrl: 'http://statsapi.mlb.com:80/api/v1/',
  },
  leagues: {
    american: {
      id: 103,
      divisions: {
        200: 'AL Central',
        201: 'AL East',
        202: 'AL West',
      }
    },
    national: {
      id: 104,
      divisions: {
        203: 'NL Central',
        204: 'NL East',
        205: 'NL West',
      }
    }
  }
}