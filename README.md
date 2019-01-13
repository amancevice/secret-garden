# Secret Garden

Fetch remote/secret environments asynchronously.

## Install

```bash
npm install secret-garden
```

## Usage

```js
const aws = require('secret-garden/aws');

aws.secretsmanager({SecretId: 'mysecret'}).then(() => {
  console.log(process.env);
});
```
