import axios from 'axios';

const KEY = 'AIzaSyDzG2Y6rzoF4Z_3DcnINQcLTWUJEr1KSuA';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
