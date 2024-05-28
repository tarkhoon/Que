import axios from 'axios';

export async function uploadPhoto(image){

    var formData = new FormData();
    formData.append("image",{
        uri: image,
        name: 'photo.jpg',
        type: 'image/jpg'}
    );

    
        try{
            const response = await axios.post('http://158.160.90.6:4000/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log(response.data)
            return(response.data)
        }catch(e){
            console.log(e)
            return res.status(500)
        } 
}

export async function likePost(user,postId){
    try{
        const response = await axios.post(`http://158.160.90.6:4000/like/${user}/${postId}`)
        console.log(response.data)
        return(response.data)
    }catch(e){
        console.log(e)
        return res.status(500)
    } 
}

export async function publicate(user,rate,description,restaurant,img_url){

    try{
        const response = await axios.post('http://158.160.90.6:4000/publicate', {
            user: user,
            rate: rate,
            description: description,
            restaurant: restaurant,
            img_url: img_url
        })
        console.log(response.data)
        return(response.data)
    }catch(e){
        console.log(e)
        return res.status(500)
    } 
}