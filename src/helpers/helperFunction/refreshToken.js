import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bsstah-dev.com/v1',
});

const refreshAccessToken = async () => {
    try {
        // Fetch the refresh token from wherever you've stored it
        const getAuthuser = localStorage.getItem('authUser');
        const parsedata = JSON.parse(getAuthuser);
        const refreshToken = parsedata.data.data.refreshToken
    
        // Make a request to your server's refreshToken endpoint
        const response = await api.post('/auth/refresh-token', { refreshToken },{
            headers: {
                'x-lang': 'en',
              },
        });
    
        // Assuming your server responds with a new access token
        const recivedata = response.data.data.accessToken
        console.log(recivedata,"recivedata")
        const newAccessToken = response.data.data.accessToken;
    
        // Update the stored access token
        localStorage.setItem('accessToken', newAccessToken);
    
        // Return the new access token
        return newAccessToken;
      } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
      }
};

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response: { status } } = error;

    if (status === 401 && !config._retry) {
      config._retry = true;

      try {
        // Refresh the access token
        const newAccessToken = await refreshAccessToken();

        // Update the Authorization header with the new token
        config.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return axios(config);
      } catch (refreshError) {
        // Handle the refresh error, e.g., redirect to login
        console.error('Error refreshing token:', refreshError);

        // You might want to clear tokens or redirect to the login page
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);
