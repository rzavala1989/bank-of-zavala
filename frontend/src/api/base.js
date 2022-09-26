import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_URL
    : process.env.REACT_APP_DEV_URL;

// Auth token
let config = {
  authToken: '',
};

// get API config
export const getApiConfig = () => ({ ...config });

//update API config
export const updateApiConfig = (newConfig) => {
  config = { ...config, ...newConfig };
};

// For all API calls in this folder

export const callAPI = (endpoint, method, data = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      headers: {
        Authorization: config.authToken ? `Bearer ${config.authToken}` : '',
      },
      url: `${BASE_URL}/${endpoint}`,
      data,
    })
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject({
          status: err.response?.status,
          message: err.message || 'Something went wrong',
        });
      });
  });
};
