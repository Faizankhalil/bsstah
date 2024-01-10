import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken()

//apply base url for axios
const API_URL = "https://bsstah-dev.com/v1"

const axiosApi = axios.create({
    baseURL: API_URL,
})

axiosApi.defaults.headers.common["Authorization"] = token

const refreshAccessToken = async () => {
    try {
        // Fetch the refresh token from wherever you've stored it
        const getAuthuser = localStorage.getItem('authUser');
        const parsedata = JSON.parse(getAuthuser);
        const refreshToken = parsedata.data.data.refreshToken
    
        // Make a request to your server's refreshToken endpoint
        const response = await axiosApi.post('/auth/refresh-token', { refreshToken },{
            headers: {
                'x-lang': 'en',
              },
        });
    
        // Assuming your server responds with a new access token
         const receiveData = response.data
        // localStorage.setItem("authUser",receiveData);
        console.log(receiveData,"receiveData")
        const token = response.data.data.accessToken;
        const newToken = `Bearer ${token}`
    
        // Update the stored access token
        localStorage.setItem('accessToken', newToken);
        // Return the new access token
        return newToken;
      } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
      }
};

axiosApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config, response: { status } } = error;
  
      if (status === 401 && !config._retry) {
        config._retry = true;
  
        try {
          // Refresh the access token
          const newAccessToken = await refreshAccessToken();
  
          // Reset the retry flag
          config._retry = false;
  
          // Update the Authorization header with the new token
          config.headers.Authorization = newAccessToken;
  
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
const headers  = {
    'accept': 'application/json',
    'x-lang': 'en'
}

export async function get(url, config = {}) {
    config.headers = { ...config.headers, ...headers, Authorization: token };
    return await axiosApi.get(url, config ).then(response => response.data)
}

export async function post(url, data, config = {} ) {
    config.headers = { ...config.headers, ...headers, Authorization: token };
    return axiosApi
        .post(url, data, config)
        .then(response => response.data)
}

export async function put(url, data, config = {}) {
    return axiosApi
        .put(url, {...data }, {...config })
        .then(response => response.data)
}

export async function del(url, config = {}) {
    return await axiosApi
        .delete(url, {...config })
        .then(response => response.data)
}