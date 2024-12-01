function Transaction({ active }) {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector 6549"
          d="M1.5 10.5L5.05066 6.94934C5.50222 6.49778 5.728 6.272 6.01419 6.25615C6.30037 6.2403 6.5497 6.43976 7.04837 6.83869L8.63796 8.11037C9.16446 8.53157 9.42771 8.74217 9.72596 8.71685C10.0242 8.69152 10.2482 8.43955 10.6961 7.93561L15.75 2.25"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M13.5 1.5H15C15.7071 1.5 16.0607 1.5 16.2803 1.71967C16.5 1.93934 16.5 2.29289 16.5 3L16.5 4.50001"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector 6550"
          d="M3.75 3L8.25 3"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Transaction;
