// import { useEffect, useState } from 'react';
// import TopButton from '../../../assets/TopButton.png';
// import styled from 'styled-components';

// const ScrollToTopButton = () => {
//   const [showButton, setShowButton] = useState(false);

//   const onClickToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     const handleShowButton = () => {
//       window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
//     };

//     window.addEventListener('scroll', handleShowButton);
//     return () => {
//       window.removeEventListener('scroll', handleShowButton);
//     };
//   }, []);
//   return (
//     showButton && (
//       <Button onClick={onClickToTop}>
//         <img src={TopButton} alt="Top_button" />
//       </Button>
//     )
//   );
// };

// export default ScrollToTopButton;

// export const Button = styled.button`
//   position: fixed;
//   right: 5%;
//   bottom: 5%;
//   z-index: 1;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// `;

const ScrollToTopButton = () => {
  return <>ScrollToTopButton</>;
};

export default ScrollToTopButton;
