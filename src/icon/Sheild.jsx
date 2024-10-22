function Sheild({ color }) {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="elements">
        <path
          id="Vector"
          d="M10.9982 1.5C7.99043 1.5 6.04018 3.51899 3.73371 4.2549C2.79589 4.55413 2.32697 4.70374 2.1372 4.91465C1.94743 5.12556 1.89186 5.43375 1.78072 6.05013C0.591434 12.646 3.1909 18.744 9.39029 21.1175C10.0564 21.3725 10.3894 21.5 11.0015 21.5C11.6135 21.5 11.9466 21.3725 12.6126 21.1175C18.8116 18.7439 21.4086 12.646 20.219 6.05013C20.1078 5.43364 20.0522 5.1254 19.8624 4.91449C19.6726 4.70358 19.2037 4.55405 18.2659 4.25499C15.9585 3.51915 14.0061 1.5 10.9982 1.5Z"
          stroke={`${color ? color : "#FF6B00"}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector 6663"
          d="M8 12.5C8 12.5 9 12.5 10 14.5C10 14.5 13.1765 9.5 16 8.5"
          stroke={`${color ? color : "#FF6B00"}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Sheild;
