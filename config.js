// Load environment variables from .env file if available
require('dotenv').load();

var config = {
  env: 'prod',

  host: '0.0.0.0',
  port: process.env.PORT || 5000,

  // Available themes:
  // + bordeau
  // + harlequin
  // + light-grey
  // + light-yellow
  // + night-blue
  // + snow
  // + yellow
  theme: 'night-blue',

  // clients configs
  api: {
    aws: {
      region: 'eu-west-1'
    },
    jenkins: {
      baseUrl: 'https://my-jenkins.com',
      auth: {
        user: 'me',
        password: 'me'
      }
    }
  },

  // define duration between each dashboard rotation (ms)
  rotationDuration: 8000,

  // define the interval used by Mozaïk Bus to call registered APIs
  apisPollInterval: 15000,

  dashboards: [
    // first dashboard
    {
      // 4 x 3 dashboard
      columns: 4,
      rows: 3,
      widgets: [
        {
          type: 'drone.drone_branches',
          user: 'plouc',
          columns: 1, rows: 1,
          x: 0, y: 0
        }
      ]
    }
  ]
};

module.exports = config;
