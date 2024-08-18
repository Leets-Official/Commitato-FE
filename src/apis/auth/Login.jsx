// import axios from 'axios';

// const clientId = 'Iv23lil2Miq3YxcLJLER';
// const redirectUrl = 'https://www.commitato.site/login';
// const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

// const githubLogin = () => {
//   const CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID;

//   onclick = () => {
//     window.location.assign(
//       `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
//     );
//   };
// const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
// const redirectUrl = import.meta.env.VITE_REACT_APP_REDIRECT_URL;
// const authorizeUrl =
//   'https://github.com/login/oauth/authorize?client_id=Iv23liJDHSa72tWCP7LX&redirect_uri=https://commitato.site/login/callback&scope=user';
// const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user`;
// window.location.href = authorizeUrl;
// window.location.href = githubURL;
// };

// export const loginCallback = async code => {
//   const res = await axios.get(
//     `https://api.commitato.site/login/callback?code=${code}`,
//   );
//   if (res.result.isSuccess) {
//     const token = res.result.accessToken;
//     console.log(token);
//     return token;
//   }
// };

// export default githubLogin;
// export default loginCallback;

import React from 'react';
import { GithubButton } from '../../pages/MainPage/MainPage';

const Login = () => <GithubButton />;

export default Login;
