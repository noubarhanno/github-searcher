export const API_CONFIG = {
    baseURL: 'https://api.github.com',
};

/**
 * default headers if no headers has been passed
 */
export const API_HEADERS_COMMON_CONFIG = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3.full+json',
    Authorization: process.env.REACT_APP_GITHUB_TOKEN || '', //your Oauth token you can create a tesing one at github
};
