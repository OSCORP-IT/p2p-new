function MoneyWavy({ color }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="MoneyWavy">
        <path
          id="Vector"
          d="M23 17.5115C14.4088 21.7087 10.5912 13.5412 2 17.7383V6.48834C10.5912 2.29115 14.4088 10.4587 23 6.26147V17.5115Z"
          stroke={color ? color : "#0D5152"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12.5 14.25C13.7426 14.25 14.75 13.2426 14.75 12C14.75 10.7574 13.7426 9.75 12.5 9.75C11.2574 9.75 10.25 10.7574 10.25 12C10.25 13.2426 11.2574 14.25 12.5 14.25Z"
          fill={color ? color : "#0D5152"}
          stroke={color ? color : "#0D5152"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M5 9V13.5"
          stroke={color ? color : "#0D5152"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M20 10.5V15"
          stroke={color ? color : "#0D5152"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default MoneyWavy;
