// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import styled from 'styled-components';
// import RankingList from './components/RankingList';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// //mockdata
// // const rankingItems = [
// //   {
// //     id: 1,
// //     rank: 1,
// //     user: 'githubID_1',
// //     tier: 'CEO 감자',
// //     commitDay: '7일',
// //     exp: 120,
// //   },
// //   {
// //     id: 2,
// //     rank: 2,
// //     user: 'githubID_2',
// //     tier: 'CEO 감자',
// //     commitDay: '5일',
// //     exp: 110,
// //   },
// //   {
// //     id: 3,
// //     rank: 3,
// //     user: 'githubID_3',
// //     tier: 'CEO 감자',
// //     commitDay: '4일',
// //     exp: 100,
// //   },
// //   {
// //     id: 4,
// //     rank: 4,
// //     user: 'githubID_4',
// //     tier: '개발자 감자',
// //     commitDay: '4일',
// //     exp: 90,
// //   },
// //   {
// //     id: 5,
// //     rank: 5,
// //     user: 'githubID_5',
// //     tier: '개발자 감자',
// //     commitDay: '4일',
// //     exp: 80,
// //   },
// //   {
// //     id: 6,
// //     rank: 6,
// //     user: 'githubID_6',
// //     tier: '말하는 감자',
// //     commitDay: '4일',
// //     exp: 70,
// //   },
// //   {
// //     id: 7,
// //     rank: 7,
// //     user: 'githubID_7',
// //     tier: '말하는 감자',
// //     commitDay: '4일',
// //     exp: 60,
// //   },
// //   {
// //     id: 8,
// //     rank: 8,
// //     user: 'githubID_8',
// //     tier: '바보 감자',
// //     commitDay: '2일',
// //     exp: 50,
// //   },
// //   {
// //     id: 9,
// //     rank: 9,
// //     user: 'githubID_9',
// //     tier: '바보 감자',
// //     commitDay: '3일',
// //     exp: 20,
// //   },
// //   {
// //     id: 10,
// //     rank: 10,
// //     user: 'githubID_10',
// //     tier: '바보 감자',
// //     commitDay: '1일',
// //     exp: 20,
// //   },
// // ];

// const RankingPage = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const queryParams = { page: 1, size: 1 };
//     const url =
//       'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/user/ranking';
//     try {
//       //성공
//       axios.get(url, { params: queryParams }).then(response => {
//         console.log(respoanse.data);
//         setData(response.data);
//       });
//     } catch (e) {
//       // 실패
//       console.log('요청실패');
//       setError(e);
//       setLoading(false);
//     }
//   }, []);

//   // if (loading) return <p>Loading ... </p>;
//   // if (error) return <p>Error: {error.message}</p>;

//   console.log(data);
//   return (
//     <>
//       <Header />
//       <RankingList data={data} />
//       <Footer />
//     </>
//   );
// };

// export default RankingPage;
