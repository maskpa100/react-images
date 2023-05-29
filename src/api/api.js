import axios from 'axios';



export const searchAPI = {
    getImages(page,count) {
        return axios.get('https://maskpa.ru/api/Pages/search.php?page='+page+'&count='+count)
            .then(response => {
                return response.data;
            });
    }
}




