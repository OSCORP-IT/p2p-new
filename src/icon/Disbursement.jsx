function Disbursement({ active }) {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector"
          d="M7.75 1.5H4.375C2.51104 1.5 1 3.01104 1 4.875C1 6.73896 2.51104 8.25 4.375 8.25H13"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M10.75 6C10.75 6 13 7.6571 13 8.25002C13 8.84294 10.75 10.5 10.75 10.5"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Disbursement;
