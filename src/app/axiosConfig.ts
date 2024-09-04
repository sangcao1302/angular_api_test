import axios from "axios";

export const api=axios.create({
    baseURL:'https://phimapi.com/danh-sach/phim-moi-cap-nhat',
    timeout:30000
  })