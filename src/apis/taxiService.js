import data from '../assets/mock-data/rides'
// import ErrorView from '../views/ErrorView'
// import axios from 'axios'

const TaxiApi = {
    /*getAllRides: function () {
        let apiStatusCode = ""
        let apiError = ""
        axios.get(process.env.REACT_APP_API_BASE_URL)
            .then(response=>{
                return response.data.rides
            })
            .catch(err=>{
                apiStatusCode = err.response.status;
                apiError = err.response.message;

                let error = {
                    apiStatusCode: apiStatusCode,
                    apiError: ""
                };

                // add as many error codes as needed
                // hide api message and display generic error messages if needed
                if (apiStatusCode === 403) {
                    error["apiError"] = "Access Denied" + apiError
                }
                else if (apiStatusCode === 401) {
                    error["apiError"] = "User not authenticated" + apiError
                }
                else if (apiStatusCode === 404) {
                    error["apiError"] = "Resource not found" + apiError
                }
                else if (apiStatusCode >= 500) {
                    error["apiError"] = "Internal Server Error" + apiError
                }
                return <ErrorView error={error}/>

            });
    },*/

    getAllRides: function () {
        return data.rides
    }
};

export default TaxiApi