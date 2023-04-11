import axios from "axios";
const baseURL="http://localhost:8090/api/master";
class MasterService{


    getByIsin(isinNumber){
        return axios.get(`${baseURL}/fetchByIsin/`+isinNumber);
    }
    /* getBySector(sector){
        return axios.get(`${baseURL}/fetchBySector/`+sector);
    }
    getByIsin(symbol){
        return axios.get(`${baseURL}/fetchBySymbol/`+symbol);
    }
     */
}
export default new MasterService();