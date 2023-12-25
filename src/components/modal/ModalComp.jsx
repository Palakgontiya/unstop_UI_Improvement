import { MdOutlineCancel } from "react-icons/md";

const ModalComp = ({ saveUserInfo }) => {
  return (
    <div className="w-[40%] relative h-[24rem] bg-white border-2 gap-10 rounded-lg text-gray-500 flex flex-col items-center justify-center">
      <div className="text-xl font-bold">
        Let Us Know You to Show you the best
      </div>
      <div className=" flex justify-center items-center gap-4">
        <button
          className="text-gray-500 font-semibold"
          onClick={() => saveUserInfo("Technical")}
        >
          <iframe
            className="w-[200px] h-[200px]"
            src="https://lottie.host/embed/0c52ea8b-4d6a-4340-94f3-98d8a2f3db30/G806udsjYh.json"
          ></iframe>{" "}
          Technical
        </button>
        <button
          className="text-gray-500 font-semibold "
          onClick={() => saveUserInfo("Non-Technical")}
        >
          <iframe  className="w-[200px] h-[200px]" src="https://lottie.host/embed/a26681f8-dfe7-45eb-8cd1-5986496ac410/iKSB5Ay9gn.json"></iframe>{" "}
          Non-Tech
        </button>
      </div>
      <button
        className="px-1 py-1 bg-gray-300 text-gray-700 border border-gray-400 rounded-full absolute top-1 right-1"
        onClick={() => saveUserInfo("All")}
      >
        <MdOutlineCancel />
      </button>
    </div>
  );
};

export default ModalComp;
