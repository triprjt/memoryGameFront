import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Use an environment variable for the API URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Add Authorization header if token exists
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiClient;
