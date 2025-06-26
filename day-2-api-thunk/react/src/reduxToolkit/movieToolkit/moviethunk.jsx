const baseUrl = "https://fakestoreapi.com"

export const fetchMovies = async (endpoint)=>{
    try{
        let res = await fetch(baseUrl+endpoint)
        let data = await res.json();
        return data
        }
        catch(error){
            console.log(error)
            return false
        }
}