const request = require('request');

/**
 * Send a request to Travis to rebuild the main knowledge base repo with the updated content.
 */
request.post('https://api.travis-ci.com/repo/MyCryptoHQ%2Fknowledge-base/requests', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Travis-API-Version': '3',
    'Authorization': `token ${process.env.TRAVIS_API_TOKEN}`
  },
  body: JSON.stringify({
    request: {
      branch: 'master'
    }
  })
}, (error) => {
  if (error) {
    throw error;
  }
});
