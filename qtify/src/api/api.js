export const fetchTopAlbums=async()=>{
    try{
    const response=await fetch("https://qtify-backend-labs.crio.do/albums/top");
    const data=await response.json();
    return data;
    }catch(e){
        console.log(e)
    }

}

export const fetchNewAlbums=async()=>{
    try{
    const response=await fetch("https://qtify-backend-labs.crio.do/albums/new");
    const data=await response.json();
    return data;
    }catch(e){
        console.log(e);
    }
}
export const fetchSongs=async()=>{
    const response=await fetch("https://qtify-backend-labs.crio.do/songs");
    const data=await response.json();
    return data;
}
export const fetchFilters=async()=>{
    try{
        const response=await fetch("https://qtify-backend-labs.crio.do/genres");
        const data=await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}