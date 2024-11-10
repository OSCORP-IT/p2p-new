function Gift({ color, size }) {
  return (
    <svg
      width={size ? size : "80"}
      height={size ? size : "80"}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Gift">
        <path
          id="Vector"
          opacity="0.2"
          d="M65 40V62.5C65 63.163 64.7366 63.7989 64.2678 64.2678C63.7989 64.7366 63.163 65 62.5 65H17.5C16.837 65 16.2011 64.7366 15.7322 64.2678C15.2634 63.7989 15 63.163 15 62.5V40H65Z"
          fill={color ? color : "white"}
        />
        <path
          id="Vector_2"
          d="M67.5 25H12.5C11.1193 25 10 26.1193 10 27.5V37.5C10 38.8807 11.1193 40 12.5 40H67.5C68.8807 40 70 38.8807 70 37.5V27.5C70 26.1193 68.8807 25 67.5 25Z"
          stroke={color ? color : "white"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M65 40V62.5C65 63.163 64.7366 63.7989 64.2678 64.2678C63.7989 64.7366 63.163 65 62.5 65H17.5C16.837 65 16.2011 64.7366 15.7322 64.2678C15.2634 63.7989 15 63.163 15 62.5V40"
          stroke={color ? color : "white"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M40 25V65"
          stroke={color ? color : "white"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M55.2469 9.75398C58.1656 12.6727 58.3375 17.5852 55.2469 20.3227C49.9625 25.0009 40 25.0009 40 25.0009C40 25.0009 40 15.0384 44.6875 9.75398C47.4156 6.66335 52.3281 6.83523 55.2469 9.75398Z"
          stroke={color ? color : "white"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_6"
          d="M24.753 9.75398C21.8342 12.6727 21.6624 17.5852 24.753 20.3227C30.0374 25.0009 39.9999 25.0009 39.9999 25.0009C39.9999 25.0009 39.9999 15.0384 35.3124 9.75398C32.5842 6.66335 27.6717 6.83523 24.753 9.75398Z"
          stroke={color ? color : "white"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Gift;
