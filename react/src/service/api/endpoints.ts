import { UUID } from "crypto";
import { URL } from "./api";


// URLs base para diferentes módulos
const BASE_URLS = {
  AUTH: '/auth',
  CLIENT: '/client',
  RESTAURANT:'/restaurant',
  REVIEW: '/review',
  BOOKING: '/booking',
  UPLOAD: '/upload',
};

// Endpoints de autenticação
export const AUTH_ENDPOINTS = {
  LOGIN: `${URL}/authenticate`,
  REGISTER: `${BASE_URLS.AUTH}/register`,
  LOGOUT: `${BASE_URLS.AUTH}/logout`,
  ME: `${BASE_URLS.AUTH}/me`,
};

// Endpoints de usuários
export const USER_ENDPOINTS = {
  CREATE: `${URL}${BASE_URLS.CLIENT}`,
  GET: (id) => `${BASE_URLS.CLIENT}/${id}`,
  UPDATE: (id) => `${BASE_URLS.CLIENT}/${id}`,
  DELETE: (id) => `${BASE_URLS.CLIENT}/${id}`,
  PROFILE: `${BASE_URLS.CLIENT}/profile`,
  CHANGE_PASSWORD: `${BASE_URLS.CLIENT}/change-password`,
  UPLOAD_AVATAR: `${BASE_URLS.CLIENT}/avatar`,
};

// Endpoints de restaurant
export const RESTAURANT_ENDPOINTS = {
  CREATE: `${URL}${BASE_URLS.RESTAURANT}`,
  GETRE: `${URL}${BASE_URLS.RESTAURANT}`,
  GET: (id) => `${URL}${BASE_URLS.RESTAURANT}/${id}`,
  GETALL:  `${URL}${BASE_URLS.RESTAURANT}/getAll`,
  UPDATE: (id) => `${BASE_URLS.RESTAURANT}/${id}`,
  DELETE: (id) => `${BASE_URLS.RESTAURANT}/${id}`,
};


// Endpoints de posts
export const REVIEW_ENDPOINTS = {
  CREATE: (reataurant_id: UUID) => `${URL}${BASE_URLS.REVIEW}/${reataurant_id}`,
  GET: (id) => `${URL}${BASE_URLS.REVIEW}/${id}`,
  GETALL:  `${URL}${BASE_URLS.REVIEW}`,
  UPDATE: (id) => `${BASE_URLS.REVIEW}/${id}`,
  DELETE: (id) => `${BASE_URLS.REVIEW}/${id}`,
};

export const BOOKING_ENDPOINTS = {
  CREATE: (reataurant_id: UUID) => `${BASE_URLS.BOOKING}/${reataurant_id}`,
  GET: (id) => `${URL}${BASE_URLS.BOOKING}/${id}`,
  GETALL:  `${URL}${BASE_URLS.BOOKING}`,
  GETALL_RESTAURANT: `${URL}${BASE_URLS.BOOKING}/restaurant`,
  UPDATE: (id) => `${BASE_URLS.BOOKING}/${id}`,
  DELETE: (id) => `${BASE_URLS.BOOKING}/${id}`,
};



// Endpoints de upload
export const UPLOAD_ENDPOINTS = {
  IMAGE: `${BASE_URLS.UPLOAD}/image`,
  FILE: `${BASE_URLS.UPLOAD}/file`,
  AVATAR: `${BASE_URLS.UPLOAD}/avatar`,
};