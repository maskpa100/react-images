import axios from 'axios';



export const searchAPI = {
    getImages(page,count,words,format,orientations) {
        return axios.get('https://maskpa.ru/api/Pages/search.php?page='+page+'&count='+count+"&words="+words+"&format="+format+"&orientations="+orientations)
            .then(response => {
                return response.data;
            });
    }
}




