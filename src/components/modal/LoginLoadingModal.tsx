import Modal from '@/components/modal';
import GithubSVG from '@/assets/icon/myPageGithub.svg?react';

const LoginLoadingModal = () => {
  return (
    <Modal className="w-[704px] h-[263px] p-6 flex flex-col justify-center items-center text-center">
      <h2 className="text-body font-Regular mb-2">
        <span className="font-ExtraBold">정보를 가져오는 중…</span>
      </h2>
      <br />
      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
      <br />
      <div className="font-Regular text-small leading-relaxed">
        GITHUB
        <GithubSVG className="inline-block mx-1 mb-1" />
        에서 정보를 가져오는 중입니다.
        <br />
        시간이 소요될 예정이니 조금 기다려주세요.
      </div>
    </Modal>
  );
};

export default LoginLoadingModal;
