import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"

const TOKEN=import.meta.env.VITE_APP_API_TOKEN

const KEY=import.meta.env.VITE_APP_API_KEY;

const headers={
    Authorization:"Bearer " + TOKEN,
}

export const fetchData=async(url,params)=>{

    const mark=url.includes("?") ? "&" :"?"

    try{

        const {data}=await axios.get(BASE_URL+url+mark+"api_key="+KEY, { headers, params})

        return data;

    }catch(err){

        console.log(err);
        return err;
    }
}

//+"?api_key="+API_KEY