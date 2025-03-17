interface UpdateButtonProps {
  onClick: () => void;
}

const UpdateButton = ({ onClick }: UpdateButtonProps) => {
  return (
    <main>
      <button
        className="w-[135px] h-[45px] bg-black hover:bg-grey cursor-pointer rounded-[10px] mt-2 mr-9"
        onClick={onClick}
      >
        <p className="font-Regular text-body font-staatliches text-white">
          UPDATE
        </p>
      </button>
    </main>
  );
};

export default UpdateButton;
