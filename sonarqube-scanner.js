const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'raj@8563',
    options: {
      'sonar.sources': './src',
    },
  },
  () => process.exit()
);
