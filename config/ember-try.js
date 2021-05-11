'use strict';

module.exports = async function () {
  return {
    command: 'yarn test:ember',
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            'ember-source': '~3.24.3',
          },
        },
      },
      {
        name: 'latest (default)',
        npm: {
          devDependencies: {},
        },
      },
    ],
  };
};
