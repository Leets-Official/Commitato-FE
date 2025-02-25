import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');

    const newHeaders = new AxiosHeaders(config.headers || {});

    if (accessToken) {
      newHeaders.set('Authorization', `Bearer ${accessToken}`);
    }

    const modifiedConfig = { ...config, headers: newHeaders };

    return modifiedConfig;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.error('API 요청 실패: ', {
        status: error.response.status,
        message: error.response.data?.message || '알 수 없는 에러 발생',
      });

      return Promise.reject(
        new Error(error.response.data?.message || 'API 요청에 실패했습니다.'),
      );
    } else if (error.request) {
      console.error('서버 응답 없음: 네트워크 오류');
      return Promise.reject(new Error('서버에 연결할 수 없습니다.'));
    } else {
      console.error('요청 구성 오류: ', error.message);
      return Promise.reject(new Error('요청 중 문제가 발생했습니다.'));
    }
  },
);

export default api;
