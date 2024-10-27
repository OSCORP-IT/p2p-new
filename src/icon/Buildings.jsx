function Buildings({ width, color, stroke }) {
  return (
    <svg
      width={width ? width : "25"}
      height={width ? width : "24"}
      viewBox={"0 0 25 24"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Buildings">
        <path
          id="Vector"
          d="M13.25 20.2495V2.99955C13.2499 2.86382 13.213 2.73065 13.1432 2.61424C13.0734 2.49784 12.9733 2.40256 12.8536 2.33857C12.7339 2.27458 12.599 2.24428 12.4635 2.25089C12.3279 2.2575 12.1967 2.30078 12.0838 2.37611L4.58375 7.3758C4.48088 7.44443 4.39658 7.53744 4.33835 7.64654C4.28012 7.75564 4.24977 7.87745 4.25 8.00111V20.2495"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M13.25 8.25H20C20.1989 8.25 20.3897 8.32902 20.5303 8.46967C20.671 8.61032 20.75 8.80109 20.75 9V20.25"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M2 20.25H23"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M10.25 10.5V12"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M7.25 10.5V12"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_6"
          d="M7.25 15.75V17.25"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_7"
          d="M10.25 15.75V17.25"
          stroke={color ? color : "white"}
          strokeWidth={stroke ? stroke : "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Buildings;
