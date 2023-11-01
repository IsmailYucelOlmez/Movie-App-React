import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"

const TOKEN=import.meta.env.API_TOKEN

const API_KEY="bbba01de2b8a0f943168846980cdba12" //.env dosyasına taşı

const headers={
    Authorization:"Bearer " + TOKEN,
}

export const fetchData=async(url,params)=>{

    const mark=url.includes("?") ? "&" :"?"

    try{

        const {data}=await axios.get(BASE_URL+url+mark+"api_key="+API_KEY, { headers, params})

        return data;

    }catch(err){

        console.log(err);
        return err;
    }
}

//+"?api_key="+API_KEY