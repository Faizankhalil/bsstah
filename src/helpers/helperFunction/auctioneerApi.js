import axios from 'axios';
import { auctioneerUrl,auctioneerProfile,auctioneerCreate,updateAuctioneerHouseurl } from '../../constants/urlEndPoints';
import accessToken from '../jwt-token-access/accessToken';
import { api } from './refreshToken';
const token = accessToken();

export const fetchAuctioneers = async( params ) => {
    try {
        const response = await axios.get(auctioneerUrl, {
            params,
            headers: {
                'accept': 'application/json',
                'x-lang': 'en'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
  }
  export const fetchAuctioneer = async( id ) => {
    try {
        const response = await api.get(`${auctioneerProfile}/${id}`, {
            headers: {
                'Authorization': token,
                'accept': 'application/json',
                'x-lang': 'en'
            }
        });
        console.log(response.data,"responsedata")
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
  }

  export const createAuctioneer = async(data)=>{
    try{
        const response = await api.post(auctioneerCreate,data,{
            headers: {
                'Authorization': token,
                'accept': 'application/json',
                'x-lang': 'en'
            } 
        });
        return response.data
    }
    catch(error){
        throw error.response.data;
    }

  }

  export const updateAuctioneer = async (data) =>{
    try{
        const response = await api.put(updateAuctioneerHouseurl,data,{
            headers: {
                'Authorization': token,
                'accept': 'application/json',
                'x-lang': 'en'
            } 
        });
        return response.data
    }
    catch(error){
        throw error.response.data
    }
  }

  export const serachhAuctioneers = async( params ) => {
    try {
        const response = await api.get(auctioneerUrl, {
            params,
            headers: {
                'accept': 'application/json',
                'x-lang': 'en'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
  }