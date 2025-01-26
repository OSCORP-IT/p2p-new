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
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Personal Loans",
    path: "/pl/overview",
    subItems: [
      { name: "Debt", path: "/pl/debt" },
      { name: "Home Improvement", path: "/pl/home-improvement" },
      { name: "Special Occasion", path: "/pl/special-occasion" },
      { name: "Auto Loan", path: "/pl/auto-loan" },
      { name: "Engagement Ring", path: "/pl/engagement-ring" },
      { name: "Funeral Service", path: "/pl/funeral-service" },
    ],
  },
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
    path: "/get-fund/conventional",
    subItems: [
      { name: "Collateral", path: "/get-fund/collateral" },
      { name: "Islamic", path: "/get-fund/islamic" },
      { name: "Referral", path: "/get-fund/referral" },
    ],
  },
  {
    name: "About Company",
    path: "/about-us",
    subItems: [
      {
        name: "Contact Us",
        path: "/contact-us",
      },
      {
        name: "FAQ",
        path: "/faq",
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
];

const Header = () => {
  const nav = useNavigate();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const [subItemShow, setSubItemShow] = useState("");
  const [stickyMenu, setStickyMenu] = useState(false);
  const profileRef = useRef(null);
  const mobileProfileRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileProfileRef.current &&
        !mobileProfileRef.current.contains(event.target)
      ) {
        setIsMobileProfileOpen(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMobileProfileOpen]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
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
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMobileMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 100); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [window.location.pathname]);
  function handleMobileMenuDropDown(index) {
    subItemShow !== ""
      ? subItemShow !== index
        ? setSubItemShow(index)
        : setSubItemShow("")
      : setSubItemShow(index);
  }
  const handleClickMenu = (location) => {
    nav(location);
  };
  const handleClickMenuMobile = (location) => {
    nav(location);
    setIsMobileMenuOpen(false);
  };
  const handleProfileOpen = () => {
    setIsProfileOpen((prev) => !prev);
  };
  const handleMobileProfileOpen = () => {
    setIsMobileProfileOpen((prev) => !prev);
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
                    +880 1710 000000
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
              <div className="hidden tab:flex items-center space-x-4">
                {menuItems.map((menu, index) => (
                  <div
                    key={index}
                    className="relative group z-50"
                    onMouseEnter={() =>
                      menu.subItems ? setSubItemShow(index) : ""
                    }
                    onMouseLeave={() =>
                      menu.subItems ? setSubItemShow("") : ""
                    }
                  >
                    <div
                      className="hover:bg-secondary/30 rounded-md px-3 py-2 cursor-pointer"
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
                    </div>
                    {subItemShow === index && (
                      <div className="w-max absolute top-10 left-0 bg-primary p-2 rounded-md">
                        {menu.subItems.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="hover:bg-secondary/30 rounded-md px-3 py-2 cursor-pointer"
                            onClick={() => handleClickMenu(subItem.path)}
                          >
                            <SmallText
                              font={`font-semibold tracking-wider`}
                              color={`${
                                currentPage === subItem.path
                                  ? "accent"
                                  : "white"
                              } uppercase`}
                            >
                              {subItem.name}
                            </SmallText>
                          </div>
                        ))}
                      </div>
                    )}
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
                      onClick={handleProfileOpen}
                      ref={profileRef}
                      className="flex items-center gap-2 cursor-pointer p-1"
                    >
                      <img
                        src={user.profileImage}
                        alt="profile image"
                        className="w-10 h-10 rounded-full object-center"
                      />
                      <Text color={`white`}>{user.userName}</Text>
                      {isProfileOpen && (
                        <div className="p-2 absolute z-10 top-12 right-0 bg-primary rounded-md w-max">
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
                onClick={handleMobileProfileOpen}
                ref={mobileProfileRef}
                className="flex items-center gap-2 cursor-pointer  rounded-md p-1 hover hover:bg-secondary/20"
              >
                <img
                  src={user.profileImage}
                  alt="profile image"
                  className="w-10 h-10 rounded-full object-center"
                />
                <Text color={`white`} font={`font-semibold hidden sm:block`}>
                  {user.userName}
                </Text>
                {isMobileProfileOpen && (
                  <div className="p-2 absolute z-10 top-12 right-0 bg-primary rounded-md w-max">
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
            </div>
          )}
        </div>
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className={`tab:hidden pt-4 z-50 sm:pt-4 space-y-2 border-b-2 border-primary fixed top-[55px] sm:top-[60px] w-2/3 sm:w-[40%] h-screen bg-primary 
            transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }
  `}
          >
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="flex justify-between items-start pr-2 sm:pr-6"
                onClick={() =>
                  menu.subItems
                    ? handleMobileMenuDropDown(index)
                    : handleClickMenuMobile(`${menu.path}`)
                }
              >
                <div className="w-full group z-50">
                  <div className="hover:bg-secondary/30 rounded-md px-3 py-2">
                    <SmallText
                      color={`${
                        currentPage === menu.path ? "accent" : "white"
                      } uppercase`}
                      font={`font-semibold tracking-wider`}
                    >
                      {menu.name}
                    </SmallText>
                  </div>
                  {subItemShow === index && (
                    <div className="w-max top-10 left-0 bg-primary p-2 rounded-md ml-2">
                      <div
                        className="hover:bg-secondary/30 rounded-md px-3 py-2"
                        onClick={() => handleClickMenuMobile(menu.path)}
                      >
                        <SmallText
                          font={`font-semibold tracking-wider`}
                          color={`${
                            currentPage === menu.path ? "accent" : "white"
                          } uppercase`}
                        >
                          {menu.name}
                        </SmallText>
                      </div>
                      {menu.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="hover:bg-secondary/30 rounded-md px-3 py-2"
                          onClick={() => handleClickMenuMobile(subItem.path)}
                        >
                          <SmallText
                            font={`font-semibold tracking-wider`}
                            color={`${
                              currentPage === subItem.path ? "accent" : "white"
                            } uppercase`}
                          >
                            {subItem.name}
                          </SmallText>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {menu.subItems && subItemShow === index && (
                  <MdArrowDropUp className="text-xl text-white mt-2" />
                )}
                {menu.subItems && subItemShow !== index && (
                  <MdArrowDropDown className="text-xl text-white mt-2" />
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
