import axios from 'axios';

export default class StoreApi {
    static fetchStoreProfileById(storeId){
        return axios.get("stores/" + storeId);
    }
}