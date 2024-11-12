// NextStepButton.jsx

const NextStepButton = () => {
  return (
    <button className="relative px-8 py-3 font-semibold text-white rounded-full overflow-hidden bg-teal-600 shadow-lg">
      <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-700 rounded-full transform -skew-x-12 scale-105 transition duration-300 hover:scale-110"></span>
      <span className="relative z-10">NEXT STEP</span>
    </button>
  );
};

export default NextStepButton;
