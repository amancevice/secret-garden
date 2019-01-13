'use strict';
const secretsmanager = {
  getSecretValue: (options, client) => {

    // Instantiate SecretsManager client if not provided
    if (client === undefined) {
      const AWS = require('aws-sdk');
      client = new AWS.SecretsManager();
    }

    // Get secret value
    return client.getSecretValue(options).promise().then((data) => {
      Object.assign(process.env, JSON.parse(data.SecretString));
      return process.env;
    });

  },
};

module.exports = {
  secretsmanager: secretsmanager,
};
