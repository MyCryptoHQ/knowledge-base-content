import fetch, { RequestInit } from 'node-fetch';

// API endpoint for the knowledge base repo
const GITHUB_API_URL = 'https://api.github.com/repos/MyCryptoHQ/knowledge-base';

// ID of the deployment workflow in the knowledge base repo
const WORKFLOW_ID = 2601725;

interface RequestOptions {
  method?: string;
  body?: Record<string, unknown>;
  token: string;
}

/**
 * Creates a request object with the specified options.
 */
const createRequest = ({ method = 'POST', body, token }: RequestOptions): RequestInit => {
  const init: RequestInit = {
    method,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${token}`,
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    return { ...init, body: JSON.stringify(body) };
  }

  return init;
};

/**
 * Sends a request to the GitHub API on the provided endpoint. This throws an error if the request fails.
 */
const sendRequest = async <T = unknown>(endpoint: string, options: RequestOptions): Promise<T | undefined> => {
  const response = await fetch(`${GITHUB_API_URL}${endpoint}`, createRequest(options));
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request to ${GITHUB_API_URL}${endpoint} failed (HTTP ${response.status}): ${text}`);
  }

  const text = await response.text();
  if (text) {
    return JSON.parse(text);
  }

  return undefined;
};

interface Tag {
  name: string;
}

/**
 * Gets the latest tag from the GitHub API.
 */
const getLatestTag = async (token: string): Promise<string> => {
  const json = await sendRequest<Tag[]>('/tags', {
    method: 'GET',
    token
  });

  if (!json || json.length === 0) {
    throw new Error('Failed to fetch latest tag');
  }

  return json[0].name;
};

/**
 * Deploys the application.
 */
const deploy = async () => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN is not set');
  }

  const tag = await getLatestTag(token);
  await sendRequest(`/actions/workflows/${WORKFLOW_ID}/dispatches`, {
    body: {
      ref: `refs/tags/${tag}`
    },
    token
  });
};

deploy().catch(error => {
  console.error('Failed to deploy:');
  console.error(error);
  process.exit(1);
});
