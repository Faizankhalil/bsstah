import axios from 'axios';
import { auctioneerUrl,auctioneerProfile } from '../../constants/urlEndPoints';

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
        throw error;
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
        throw error;
    }
  }