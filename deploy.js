const fetch = require('node-fetch');

const GITHUB_API_URL = 'https://api.github.com/repos/MyCryptoHQ/knowledge-base';
const TRAVIS_API_URL = 'https://api.travis-ci.com/repo/MyCryptoHQ%2Fknowledge-base/requests';

/**
 * Get the latest tag from the Knowledge Base repository.
 *
 * @return {Promise<string>}
 */
const fetchTag = async () => {
  const data = await (await fetch(`${GITHUB_API_URL}/tags`, {
    method: 'get',
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  })).json();

  return data[0].name;
};

/**
 * Trigger a Travis build for the Knowledge Base repository in order to redeploy with the updated content.
 *
 * @param {string} tag
 * @return {Promise<void>}
 */
const deploy = async (tag) => {
  const response = await fetch(TRAVIS_API_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      Authorization: `token ${process.env.TRAVIS_API_TOKEN}`,
      'Content-Type': 'application/json',
      'Travis-API-Version': '3',
    },
    body: JSON.stringify({
      request: {
        branch: tag,
        config: {
          merge_mode: 'deep_merge_append',
          env: {
            global: [
              `TRAVIS_TAG=${tag}`
            ]
          }
        }
      }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Invalid response status code: ${response.status}.\n${text}`);
  }
};

/**
 * Start automatic deployment.
 */
fetchTag()
    .then(deploy)
    .catch(error => {
      console.error('Failed to deploy:\n', error);
      process.exit(1);
    });
