import API_rides_response from './APIMockResponse'

const TaxiApi = {
    /*getAllRides: function () {
        axios.get('https://taxi.com/api/rides')
            .then(res=>{
                console.log(res.data.data);
                setUserData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    }*/
    getAllRides: function () {
        return API_rides_response
    }
};

export default TaxiApi