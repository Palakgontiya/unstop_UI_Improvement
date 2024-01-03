import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useRef } from "react";

const ModalComp = ({ saveUserInfo }) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    const selectedPref = localStorage.getItem("userInfo") || "All";
    saveUserInfo(selectedPref);
  };

  useEffect(() => {
    // Disable scroll when the modal is mounted
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scroll when the modal is unmounted
      document.body.style.overflow = "unset";
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const onOptionChange = (option) => {
    saveUserInfo(option);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-gray-900 bg-opacity-50"
      ref={modalRef}
      onClick={closeModal}
    >
      <div className="bg-white w-[36rem] rounded-lg overflow-hidden shadow-lg flex flex-col relative p-8 mt-20">
        <button
          className="absolute top-4 right-4 p-2 rounded-full transition duration-300 hover:bg-gray-300"
          onClick={closeModal}
        >
          <MdOutlineCancel size={24} className="text-gray-700" />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Let Us Know You</h2>
          <p className="text-gray-600 mb-8">
            Choose an option to personalize your experience:
          </p>

          <div className="flex gap-4">
            <div
              className="flex flex-col items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition duration-300 mb-6"
              onClick={() => onOptionChange("Technical")}
            >
              <div
                className="w-36 h-36 mr-4"
                onClick={() => onOptionChange("Technical")}
              >
                <iframe
                  className="w-full h-full"
                  src="https://lottie.host/embed/0c52ea8b-4d6a-4340-94f3-98d8a2f3db30/G806udsjYh.json"
                ></iframe>
              </div>
              <span className="cursor-pointer text-[#1C4980] border border-[#1C4980] px-3 py-2 rounded-3xl outline-none text-[12px] font-bold">
                Technical
              </span>{" "}
              {/* Updated: Set text color to black */}
            </div>
            <div
              className="flex flex-col items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition duration-300 mb-6"
              onClick={() => onOptionChange("Non-Technical")}
            >
              <div
                className="w-36 h-36 mr-4"
                onClick={() => onOptionChange("Non-Technical")}
              >
                <iframe
                  className="w-full h-full"
                  src="https://lottie.host/embed/a26681f8-dfe7-45eb-8cd1-5986496ac410/iKSB5Ay9gn.json"
                ></iframe>
              </div>
              <span className="cursor-pointer text-[#1C4980] border border-[#1C4980] px-3 py-2 rounded-3xl outline-none text-[12px] font-bold">
                Non-Tech
              </span>{" "}
              {/* Updated: Set text color to black */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComp;
