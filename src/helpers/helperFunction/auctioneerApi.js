import axios from 'axios';
import { auctioneerUrl,auctioneerProfile,auctioneerCreate } from '../../constants/urlEndPoints';
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
        const response = await axios.get(`${auctioneerProfile}/${id}`, {
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

  export const createAuctioneer = async(data)=>{
    try{
        const response = await api.post(auctioneerCreate,data,{
            headers: {
                'Authorization': `Bearer ${token}`,
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