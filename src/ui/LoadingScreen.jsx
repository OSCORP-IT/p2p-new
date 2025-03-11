import Logo from "../assets/BlackLogo.png";
function LoadingScreen() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-lg">
          <img src={Logo} alt="White Logo" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
