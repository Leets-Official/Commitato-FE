import { motion } from 'framer-motion';
import styled from 'styled-components';
const textVariants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 200,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.9,
    },
  },
};

const AnimatedText = () => {
  return (
    <Container>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowDiv1>HOW?</HowDiv1>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowDiv2>HOW?</HowDiv2>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowDiv3>HOW?</HowDiv3>
      </motion.div>
    </Container>
  );
};

export default AnimatedText;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 500px;
  margin-left: 300px;
`;

export const HowDiv1 = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 124px;
  color: ${({ theme }) => theme.COLORS.black};
`;

export const HowDiv2 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.brown[200]};
  margin-left: 400px;
`;
export const HowDiv3 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.yellow[200]};
  margin-left: 900px;
  margin-bottom: 300px;
`;
