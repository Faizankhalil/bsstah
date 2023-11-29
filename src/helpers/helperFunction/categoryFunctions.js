import axios from 'axios';
import { categoryUrl } from "../../constants/urlEndPoints";
import accessToken from '../jwt-token-access/accessToken';
const token = accessToken();

// get categories

export const fetchCategory = async (params) =>{
    try {
        const response = await axios.get(categoryUrl, {
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

// add category

export const addCategory = async (data) => {
    try {
      const response = await axios.post(categoryUrl, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'x-lang': 'en'
        }
      });
      console.log('Response from API:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error.message;
    }
  };
  export const updateCategory = async (data) => {
    try {

      const url = `${categoryUrl}${data.id}`;
    console.log(data);
      const response = await axios.put(`${categoryUrl}${data.id}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'x-lang': 'en'
        }
      });
      console.log('Response from API:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error.message;
    }
  };
  
  
  export const deleteCategory = async (RecordId) => {
    try {

      const url = `${categoryUrl}${RecordId}`;
    console.log(RecordId,"RecordId");
    console.log(url);
      const response = await axios.delete(`${categoryUrl}${RecordId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'x-lang': 'en'
        }
      });
      console.log('Response from API:', response);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error.message;
    }
  };
  