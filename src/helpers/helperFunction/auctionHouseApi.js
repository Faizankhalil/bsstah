import {auctionHouselist } from '../../constants/urlEndPoints';
import accessToken from '../jwt-token-access/accessToken';
import { api } from './refreshToken';
const token = accessToken();

export const fetchAuctionHouse = async( params ) => {
    try {
        const response = await api.get(auctionHouselist, {
            params,
            headers: {
                'Authorization': token,
                'accept': 'application/json',
                'x-lang': 'en'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
  }