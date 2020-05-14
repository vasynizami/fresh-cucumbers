import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://fresh-cucumbers.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})

//=============================================
//================= AUTH =====================
//============================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

//this will reset our header back to nothing (log out)
export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}


//=============================================
//================= movies ==================
//============================================

export const getAllMovies = async () => {
  const resp = await api.get('/movies');
  return resp.data;
}

export const getOneMovie = async (id) => {
  const resp = await api.get(`/movies/${id}`);
  return resp.data;
}

//=============================================
//================= reviews ====================
//============================================

export const getAllReviews = async (movie_id) => {
  const resp = await api.get(`/movies/${movie_id}/reviews`);
  return resp.data;
}

export const getOneReview = async (id) => {
  const resp = await api.get(`/movies/anything/reviews/${id}`);
  return resp.data;
}

export const postReview = async (movie_id, reviewData) => {
  const resp = await api.post(`/movies/${movie_id}/reviews`, reviewData);
  return resp.data;
}

export const editReview = async (id, reviewData) => {
  const resp = await api.put(`/movies/anything/reviews/${id}`, reviewData);
  return resp.data;
}

export const destroyReview = async (movie_id, id) => {
  const resp = await api.delete(`/movies/${movie_id}/reviews/${id}`);
  return resp;
}
