import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {API_BASE_URL, API_TIMEOUT} from '@env';

// Define base query with common configuration
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL || 'https://api.example.com',
  timeout: parseInt(API_TIMEOUT || '30000', 10),
  prepareHeaders: headers => {
    // Add common headers here
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    // Add auth token if available
    // const token = getState().auth.token;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }

    return headers;
  },
});

// Create the base API service
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}), // No endpoints defined yet
  tagTypes: [], // Define tag types when you add endpoints
});

// Export for use in store
export default baseApi;
