// import React, { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
//   useNavigate,
// } from 'react-router-dom';
// import axios from 'axios';
// import githubLogin from '../../apis/auth/Login';

// const Home = () => {
//   // 함수 호출로 변경합니다.
//   useEffect(() => {
//     githubLogin();
//   }, []);

//   return <div>Redirecting to GitHub...</div>;
// };

// import loginCallback from '../../apis/auth/Login';

// const CallbackPage = () => {
// const urlParams = new URLSearchParams(window.location.search);

// const code = urlParams.get('code');
// console.log('Code:', code);

// useEffect(() => {
//   if (code) {
//     loginCallback(code).then(token => {
//       localStorage.setItem('accessToken', token);
//       window.location.replace(import.meta.env.VITE_REACT_APP_MY_REDIRECT_URL);
//     });
//   }
// }, [code]);

// return <div>깃허브 인가 코드를 받아 오는 중입니다.</div>;
// useEffect(() => {
//   const url = new URL(window.location.href);
//   const authorizationCode = url.searchParams.get('code');
//   console.log(authorizationCode); //인증 코드
// });

// const getAccessToken = async (authorizationCode) => {
//   axios
//     .post("https://localhost:4000/callback", {authorizationCode})
//     .then((res) =>{
//       setAccessToken(res.data.accessToken) //Access Token 저장
//       setIsLogin(true) //액세스 토큰을 받아와 로그인 상태 true로 변경
//     })
//     .catch((err) => console.log(err));
// };

//   return (
//     <>
//       <div></div>
//     </>
//   );
// };

// export default CallbackPage;

// export default CallbackPage;

// const Callback = () => {
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);
//   const [refreshToken, setRefreshToken] = useState(null);
//   const [hasRedirected, setHasRedirected] = useState(false); // 추가된 상태

//   useEffect(() => {
//     const fetchToken = async () => {
//       const code = new URLSearchParams(search).get('code');
//       if (code) {
//         try {
//           const response = await axios.get('api/login/callback', {
//             params: { code },
//           });
//           console.log('Response:', response.data);
//           const { accessToken, refreshToken } = response.data.result;
//           localStorage.setItem('ACCESS_TOKEN_KEY', accessToken);
//           localStorage.setItem('REFRESH_TOKEN_KEY', refreshToken);
//           console.log('Tokens:', accessToken, refreshToken);

//           // Set the tokens to state for displaying
//           setAccessToken(accessToken);
//           setRefreshToken(refreshToken);
//           setHasRedirected(true); // 리다이렉트 플래그 설정
//         } catch (err) {
//           console.error('Error fetching tokens:', err);
//           setError('Failed to fetch tokens');
//         }
//       } else {
//         setError('Authorization code not found');
//       }
//       setLoading(false);
//     };

//     fetchToken();
//   }, [search]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Authenticated successfully!</h1>
//       <p>
//         <strong>Access Token:</strong> {accessToken}
//       </p>
//       <p>
//         <strong>Refresh Token:</strong> {refreshToken}
//       </p>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Callback />} />
//     </Routes>
//   </Router>
// );

// export default App;

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [hasRedirected, setHasRedirected] = useState(false); // 추가된 상태

  useEffect(() => {
    const fetchToken = async () => {
      const code = new URLSearchParams(search).get('code');
      if (code) {
        try {
          const response = await axios.get('api/login/callback', {
            params: { code },
          });
          console.log('Response:', response.data);
          const { accessToken, refreshToken } = response.data.result;
          localStorage.setItem('ACCESS_TOKEN_KEY', accessToken);
          localStorage.setItem('REFRESH_TOKEN_KEY', refreshToken);
          console.log('Tokens:', accessToken, refreshToken);

          // Set the tokens to state for displaying
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          setHasRedirected(true); // 리다이렉트 플래그 설정
        } catch (err) {
          console.error('Error fetching tokens:', err);
          setError('Failed to fetch tokens');
        }
      } else {
        setError('Authorization code not found');
      }
      setLoading(false);
    };

    fetchToken();
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Authenticated successfully!</h1>
      <p>
        <strong>Access Token:</strong> {accessToken}
      </p>
      <p>
        <strong>Refresh Token:</strong> {refreshToken}
      </p>
    </div>
  );
};

export default Callback;
