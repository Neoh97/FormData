import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001/api/inscription";
axios.defaults.headers.common = {'Authorization': `${process.env.REACT_APP_SECRET}`}
export default axios; 