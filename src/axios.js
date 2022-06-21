import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.giphy.com/v1/gifs",
    params:{
        api_key:"p1QZPZ281P6Vxi4C4w1YgLefcJBEi08e",
        limit: 15,
        rating: "pg"
    }
})

export const getGifBySearchQuery = (query)=>{
    return instance.get(`/search?q=${query}`);
}
