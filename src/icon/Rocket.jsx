function Rocket({ color }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Rocket">
        <path
          id="Vector"
          d="M14 21H11"
          stroke={color ? color : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M13.5625 9.375C13.5625 9.9618 13.0868 10.4375 12.5 10.4375C11.9132 10.4375 11.4375 9.9618 11.4375 9.375C11.4375 8.7882 11.9132 8.3125 12.5 8.3125C13.0868 8.3125 13.5625 8.7882 13.5625 9.375Z"
          fill="white"
          stroke={color ? color : "white"}
          strokeWidth="0.125"
        />
        <path
          id="Vector_3"
          d="M9.38843 18.0004C4.01749 8.93662 10.2378 3.05006 12.0397 1.65787C12.1713 1.55555 12.3333 1.5 12.5 1.5C12.6667 1.5 12.8287 1.55555 12.9603 1.65787C14.7622 3.05006 20.9825 8.93662 15.6116 18.0004H9.38843Z"
          stroke={color ? color : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M17.735 10.3945L20.5766 13.8033C20.65 13.8914 20.7021 13.9953 20.7291 14.1068C20.7561 14.2182 20.7572 14.3344 20.7322 14.4464L19.5734 19.6617C19.5458 19.7861 19.487 19.9014 19.4024 19.9967C19.3179 20.092 19.2105 20.1642 19.0903 20.2065C18.9702 20.2488 18.8412 20.2598 18.7156 20.2385C18.59 20.2171 18.4719 20.1642 18.3725 20.0845L15.6116 17.9995"
          stroke={color ? color : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M7.265 10.3945L4.42344 13.8033C4.35005 13.8914 4.29785 13.9953 4.27087 14.1068C4.24389 14.2182 4.24285 14.3344 4.26782 14.4464L5.42657 19.6617C5.45419 19.7861 5.51304 19.9014 5.59756 19.9967C5.68208 20.092 5.78949 20.1642 5.90966 20.2065C6.02982 20.2488 6.15878 20.2598 6.28438 20.2385C6.40997 20.2171 6.52806 20.1642 6.6275 20.0845L9.38844 17.9995"
          stroke={color ? color : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Rocket;
