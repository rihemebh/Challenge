import axios from 'axios'


const BASE_URL = "https://goquotes-api.herokuapp.com/api/v1"
export const GetQuotes = async (count) => {
    
   const result = await axios.get(BASE_URL+`/random?count=${count}`)

   return result
 
  };