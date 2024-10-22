function ChartLineUp({ color, bgShade, width, height }) {
  return (
    <svg
      width={`${width ? width : "32"}`}
      height={`${height ? height : "32"}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M4 6H26C26.5304 6 27.0391 6.21071 27.4142 6.58579C27.7893 6.96086 28 7.46957 28 8V26H4V6Z"
        fill={`${bgShade ? `${color ? color : "#FF6B00"}` : ""}`}
      />
      <path
        d="M28 26H4V6"
        stroke={`${color ? color : "#FF6B00"}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 9L16 18L12 14L4 22"
        stroke={`${color ? color : "#FF6B00"}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 14V9H20"
        stroke={`${color ? color : "#FF6B00"}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChartLineUp;
