const assert = require('assert');
const aws = require('../aws');

const MockSecretsManager = {
  getSecretValue: (options) => {
    return {
      promise: () => {
        return Promise.resolve({
          SecretString: JSON.stringify({FIZZ: 'buzz'}),
        });
      },
    };
  },
};

describe('SecretsManager', () => {
  it('adds FIZZ=buzz to process.env', (done) => {
    aws.secretsmanager.getSecretValue({SecretId: 'fizzbuzz'}, MockSecretsManager).then(() => {
      assert(process.env.FIZZ === 'buzz');
      return null;
    }).then(done).catch(done);
  });
});
