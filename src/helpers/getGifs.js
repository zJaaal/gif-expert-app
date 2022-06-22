import { getGifBySearchQuery } from "../axios";

const getGifs = async (category)=>{
    let { data } = await getGifBySearchQuery(category);

    let gifs = data.data.map((gif) =>{
        return{
            id: gif.id,
            image: gif.images.downsized_medium.url,
            title: gif.title.trim().length != 0 ? gif.title : "Unknown",
            creator: !!gif.user?.username ? gif.user.username : "Unknown Artist"
        }
    });

    return gifs;
}

export default getGifs;