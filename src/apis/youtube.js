import axios from 'axios';
const KEY ='AIzaSyDcDw92fY_qSN61XzPBNvP9m6GTz4qUWJw';

export default axios.create({

baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5 ,
    key:KEY
    

}


});