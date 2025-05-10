import axios from "axios";
const myInterceptor =axios.create({
    baseURL: "http://localhost:8080",
});
 // Request Interceptor
myInterceptor.interceptors.request.use((config)=>{
    console.log('request ');
config.headers['Content-Type'] = 'application/json';

if(!config.skipAuth){
    config.headers['Authorization'] = localStorage.getItem('authToken');
 }
 console.log(config);
 return config;
},(error) => {
    //Handle request error
    return Promise.reject(error);
});
 // Response Interceptor
 myInterceptor.interceptors.response.use((response)=>{
    console.log('response ');
    console.log(response);
    if(response?.headers?.Authorization){
        localStorage.setItem('authToken',response?.headers?.Authorization);
     }
     return response;
    },(error) => {
        //Handle request error
        return Promise.reject(error);
});
export default myInterceptor;

//  import axios from "axios";

// //import { config } from "next/dist/build/templates/pages";
// const myInterceptor =axios.create({
//     baseURL: "http://68.183.90.216:8083",
//     // headers: {
//     //     'Content-Type': 'application/json',
//     // },
// });

// // Request Interceptor
// myInterceptor.interceptors.request.use(config=>{
//     config.headers['Content-Type'] = 'application/json';
//     if(!config.skipAuth){
//         config.headers['Authorization'] = localStorage.getItem('authToken');
//     }
//     // Retrieve the token from localStorage or cookies
//     // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//     //     // Add the token to the Authorization header
//     //     if (token) {
//     //         config.headers['Authorization'] = `Bearer ${token}`;
//     //       }
//     console.log(config);
//     return config;
// },(error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// Response Interceptor
// myInterceptor.interceptors.response.use(
    
    //     (response) => {
    //       // Check if the token is present in the response data
    //       if (response.data.data && response.data.data.token) {
    //         console.log("Token found in response:", response.data.data.token);
    //       } else {
    //         console.log("No token in response.");
    //       }
    //       return response;
    //     },
    //     (error) => {
    //       // Handle errors
    //       return Promise.reject(error);
    //     }
    //   );
      
//   (response) => {
//     // Handle the response data
//     if (response.data && response.data.token) {
//       // Save new token if received in response
//       localStorage.setItem('token', response.data.token);
//     }
//     return response;
//   },
//   (error) => {
//     // Handle response error
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized error, possibly redirect to login
//       console.error('Unauthorized, redirecting to login...');
//     }
//     return Promise.reject(error);
//   }
// );