import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import SmallText from "../components/SmallText";
import Logo from "../assets/WhiteLogo.png";
import { FiLogIn } from "react-icons/fi";
import Small from "../components/Small";
import EN from "../assets/EN.svg";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { logOut } from "../features/authentication/authSlice";

const menuItems = [
  {
    name: "Investment",
    path: "/investment",
    subItems: [
      { name: "Islamic", path: "/investment/islamic" },
      { name: "Assure", path: "/investment/assure" },
      { name: "Plus", path: "/investment/plus" },
      { name: "Referral", path: "/investment/referral" },
    ],
  },
  {
    name: "Calculator",
    path: "/calculator/personal",
    subItems: [
      { name: "Debt Cons Calculator", path: "/calculator/debt" },
      { name: "Home Equity Calculator", path: "/calculator/home-equity" },
    ],
  },
  {
    name: "Get Fund",
    path: "/get-fund/collateral",
    subItems: [
      { name: "Conventional", path: "/get-fund/conventional" },
      { name: "Collateral", path: "/get-fund/collateral" },
      { name: "Islamic", path: "/get-fund/islamic" },
      { name: "Referral", path: "/get-fund/referral" },
    ],
  },
  {
    name: "Personal Loan (PL)",
    path: "/pl/overview",
    subItems: [
      { name: "Debt", path: "/pl/debt" },
      { name: "Home Improvement", path: "/pl/home-improvement" },
      { name: "Special Occasion", path: "/pl/special-occasion" },
    ],
  },
  {
    name: "About Us",
    path: "/about-us",
    subItems: [],
  },
  {
    name: "Contact",
    path: "/contact-us",
    subItems: [],
  },
  {
    name: "Blog",
    path: "/",
    subItems: [],
  },
];

const Header = () => {
  const nav = useNavigate();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  console.log(currentPage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const middleRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setIsProfileOpen(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsProfileOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 100); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClickMenu = (location) => {
    setCurrentPage(location);
    nav(location);
  };
  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <header>
      <nav className="">
        <div className="hidden tab:block">
          <div className="w-full bg-primary py-3 border-b border-b-gray-400">
            <div className="flex justify-between px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto">
              <img src={Logo} alt="logo" onClick={() => handleClickMenu("/")} />
              <div className="flex items-center gap-8 divide-x">
                <div>
                  <Small align={`text-center`} padding={`py-0`} color={`white`}>
                    House#32, Road#19
                  </Small>
                  <Small align={`text-center`} padding={`py-0`} color={`white`}>
                    Banani, Dhaka-1213
                  </Small>
                </div>
                <div className="text-white text-center pl-8">
                  <Small align={`text-center`} padding={`py-0`} color={`white`}>
                    Call Us:
                  </Small>
                  <Small align={`text-center`} padding={`py-0`} color={`white`}>
                    +880 1XXX XXXXXX
                  </Small>
                </div>
                <div className="text-center pl-8 flex items-center gap-2 cursor-pointer">
                  <img src={EN} alt="eng language" />
                  <Small color={`white`}>EN</Small>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full py-2 bg-primary  ${
              stickyMenu
                ? "fixed shadow-md top-0 "
                : "-top-[65px] tab:-top-[88px] pt-2"
            } left-0 z-50 transition-top duration-500 ease-in-out`}
          >
            <div className="flex justify-between items-center px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4">
                {menuItems.map((menu, index) => (
                  <div key={index} className="relative group z-50">
                    <button
                      className="hover:bg-secondary/30 rounded-md px-3 py-2"
                      onClick={() => handleClickMenu(menu.path)}
                    >
                      <SmallText
                        color={`${
                          currentPage === menu.path ? "accent" : "white"
                        } uppercase`}
                        font={`font-semibold tracking-wider`}
                      >
                        {menu.name}
                      </SmallText>
                    </button>
                  </div>
                ))}
              </div>
              <>
                {!user.isLoggedIn && (
                  <button
                    onClick={() => nav("/auth/login")}
                    className="flex items-center gap-2 uppercase px-6 py-1.5 bg-accent rounded-md"
                  >
                    <Text font={`font-semibold `} color={`white`}>
                      login
                    </Text>
                    <FiLogIn className="text-white text-xl" />
                  </button>
                )}
                {user.isLoggedIn && (
                  <div className="relative">
                    <div
                      onClick={() => setIsProfileOpen(true)}
                      className="flex items-center gap-2 cursor-pointer p-1"
                    >
                      <img
                        src="https://www.admin-p2p.alzakati.com/assets/images/avator.png"
                        alt="profile image"
                        className="w-10 h-10 rounded-full object-center"
                      />
                      <Text color={`white`}>{user.userName}</Text>
                    </div>
                    {isProfileOpen && (
                      <div
                        ref={middleRef}
                        className="p-2 absolute z-10 top-12 bg-primary rounded-md w-full"
                      >
                        <div
                          onClick={() => nav(`/user/dashboard`)}
                          className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer  "
                        >
                          <LuLayoutDashboard className="text-white text-xl" />
                          <Text
                            color={`white`}
                            padding={`py-0`}
                            font={`font-semibold`}
                          >
                            Dashboard
                          </Text>
                        </div>
                        <div
                          onClick={() => nav(`/user/profile`)}
                          className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer  my-2"
                        >
                          <CgProfile className="text-white text-xl" />
                          <Text
                            color={`white`}
                            padding={`py-0`}
                            font={`font-semibold`}
                          >
                            Profile
                          </Text>
                        </div>
                        <div
                          onClick={() => dispatch(logOut())}
                          className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer "
                        >
                          <BiLogOut className="text-white text-xl" />
                          <Text
                            color={`white`}
                            padding={`py-0`}
                            font={`font-semibold`}
                          >
                            Log Out
                          </Text>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
              {/* Mobile Menu Button */}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`tab:hidden flex items-center justify-between px-2 shadow-md py-1.5 ${
            stickyMenu
              ? "fixed shadow-md top-0 w-full bg-primary z-50"
              : "-top-[65px] py-2 bg-primary"
          } transition-top duration-500 ease-in-out`}
        >
          <div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <img src={Logo} alt="logo" onClick={() => nav("/")} />
          {!user.isLoggedIn && (
            <button
              onClick={() => nav("/auth/login")}
              className="flex items-center gap-2 uppercase px-6 py-2 bg-accent rounded-md"
            >
              <Text font={`font-semibold `} color={`white`}>
                login
              </Text>
              <FiLogIn className="text-white text-xl" />
            </button>
          )}
          {user.isLoggedIn && (
            <div className="relative">
              <div
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2 cursor-pointer  rounded-md p-1 hover hover:bg-secondary/20"
              >
                <img
                  src="https://www.admin-p2p.alzakati.com/assets/images/avator.png"
                  alt="profile image"
                  className="w-10 h-10 rounded-full object-center"
                />
                <Text color={`white`} font={`font-semibold`}>
                  {user.userName}
                </Text>
              </div>
              {isProfileOpen && (
                <div
                  ref={middleRef}
                  className="p-2 absolute z-10 top-12 bg-primary rounded-md w-full"
                >
                  <div
                    onClick={() => nav(`/user/dashboard`)}
                    className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer  "
                  >
                    <LuLayoutDashboard className="text-white text-xl" />
                    <Text
                      color={`white`}
                      padding={`py-0`}
                      font={`font-semibold`}
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div
                    onClick={() => nav(`/user/profile`)}
                    className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer  my-2"
                  >
                    <CgProfile className="text-white text-xl" />
                    <Text
                      color={`white`}
                      padding={`py-0`}
                      font={`font-semibold`}
                    >
                      Profile
                    </Text>
                  </div>
                  <div
                    onClick={() => dispatch(logOut())}
                    className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer "
                  >
                    <BiLogOut className="text-white text-xl" />
                    <Text
                      color={`white`}
                      padding={`py-0`}
                      font={`font-semibold`}
                    >
                      Log Out
                    </Text>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {isMobileMenuOpen && (
          <div className="tab:hidden pt-4 z-50 sm:pt-4 space-y-2 border-b-2 border-primary fixed top-[55px] sm:top-[65px] w-1/2 h-screen bg-white">
            {menuItems.map((menu, index) => (
              <div key={index} className="space-y-1">
                {/* Toggle only sub-menu open/close on mobile */}
                <button
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                  onClick={() => {
                    handleSubMenuToggle(index);
                  }}
                >
                  {menu.name}
                </button>

                {/* Conditionally render sub-menus on mobile */}
                {activeSubMenu === index && menu.subItems.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {menu.subItems.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 rounded-md"
                        onClick={() => {
                          nav(subItem.path);
                          setIsMobileMenuOpen(false); // Close mobile menu
                          setActiveSubMenu(null); // Close sub-menu
                        }}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
