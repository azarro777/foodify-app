import axios from 'axios';

const foodifyApi = () => {
  const _apiBase = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const response = axios
    .get(_apiBase)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
export default foodifyApi;
