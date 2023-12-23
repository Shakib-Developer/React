import axios from "axios";

const BaseURL="https://basic-blog.teamrabbil.com/api"

export async function menuCategories() {

    let res = await axios.get(BaseURL+"/post-categories");
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }

}

export async function homePosts() {

    let res = await axios.get(BaseURL+"/post-newest");
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }

}

export async function blogList(id) {

    let res = await axios.get(BaseURL+"/post-list/"+id);
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }

}

export async function detailsPosts(id) {

    let res = await axios.get(BaseURL+"/post-details/"+id);
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }

}