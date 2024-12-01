function Loans({ active }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector"
          d="M1.25 3.125L8.75 3.125"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          id="Polygon 31"
          d="M12.95 11.6695C12.15 12.2053 11.75 12.4732 11.75 12.875C11.75 13.2768 12.15 13.5447 12.95 14.0805C13.75 14.6163 14.15 14.8842 14.45 14.6833C14.75 14.4824 14.75 13.9466 14.75 12.875C14.75 11.8034 14.75 11.2676 14.45 11.0667C14.15 10.8658 13.75 11.1337 12.95 11.6695Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          id="Polygon 32"
          d="M12.95 1.91947C12.15 2.45526 11.75 2.72316 11.75 3.125C11.75 3.52684 12.15 3.79474 12.95 4.33053C13.75 4.86632 14.15 5.13421 14.45 4.93329C14.75 4.73237 14.75 4.19658 14.75 3.125C14.75 2.05342 14.75 1.51763 14.45 1.31671C14.15 1.11579 13.75 1.38368 12.95 1.91947Z"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          id="Vector_2"
          d="M1.25 8L8.75 8"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          id="Vector_3"
          d="M1.25 12.875L8.75 12.875"
          stroke={active ? "#FF6B00" : "#444955"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Loans;
