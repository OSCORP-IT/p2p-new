import LogoWhite from "../assets/WhiteLogo.png";
import SmallText from "../components/SmallText";
import Heading1 from "../components/Heading1";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import newsLetterBg from "../assets/NoisyGradients.png";
import House from "../assets/House.svg";
import PhoneCall from "../assets/PhoneCall.svg";
import Mail from "../assets/Mail.svg";
function Footer() {
  return (
    <div className="bg-primary mt-12 sm:mt-16 py-5 px-4 sm:px-0">
      <div
        className="sm:mx-4 tab:mx-auto  tab:w-11/12 laptop:w-5/6 bg-cover bg-no-repeat  z-50  rounded-md -mt-16 sm:-mt-[100px] mb-6"
        style={{ backgroundImage: `url(${newsLetterBg})` }}
      >
        <div className="bg-primary/70 pt-8 pb-10 px-2 sm:px-16 rounded-md">
          <Heading1
            color={`text-white`}
            align={`text-center`}
            font={`font-semibold font-poppins leading-tight`}
            padding={`pb-4`}
          >
            Sign up for our newsletter
          </Heading1>
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-1 w-full">
            <div className="w-full sm:w-3/4">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="text"
                  className="p-2 rounded-md w-full sm:w-1/2"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="p-2 rounded-md w-full sm:w-1/2"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className="p-2 rounded-md w-full mt-2"
                placeholder="Email Address"
              />
            </div>
            <button className="w-1/2 m-auto sm:m-0 sm:w-1/4 h-full flex-1 bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-4 py-2 sm:px-6 sm:py-8 text-base font-semibold text-textColor1 text-center">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex flex-wrap gap-4 sm:gap-0 tab:flex-nowrap items-start justify-center tab:justify-between">
          <div className="w-[45sm:%] sm:w-[30%] tab:w-[20%] mb-2 sm:mb-0">
            <img src={LogoWhite} alt="logo" className="w-max m-auto sm:m-0" />
            <div className="flex items-center gap-2 pt-3">
              <img src={House} alt="house icon" />
              <div>
                <SmallText padding={`py-0`} color={`white`}>
                  House#32, Road#19
                </SmallText>
                <SmallText padding={`py-0`} color={`white`}>
                  Banani, Dhaka-1213
                </SmallText>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <img src={PhoneCall} alt="house icon" />
              <div>
                <SmallText padding={`py-0`} color={`white`}>
                  017XX-XXXXXX
                </SmallText>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <img src={Mail} alt="house icon" />
              <div>
                <SmallText padding={`py-0`} color={`white`}>
                  info@fintech.com
                </SmallText>
              </div>
            </div>
          </div>
          <div className="w-[45%] sm:w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              Loans
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white cursor-pointer`}>
                Personal Loan
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Debt Consolidation Loan
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Home Improvement Loan
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Special Occasion Loan
              </SmallText>
            </div>
          </div>
          <div className="w-[45%] sm:w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              Invest
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white cursor-pointer`}>Fintech P2P</SmallText>
              <SmallText color={`white cursor-pointer`}>
                Fintech Islamic
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Fintech Assure
              </SmallText>
              <SmallText color={`white cursor-pointer`}>Fintech Plus</SmallText>
            </div>
          </div>
          <div className="w-[45%] sm:w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              Financing
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white cursor-pointer`}>
                Conventional Financing
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Collateral Banked Financing
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Islamic Financing
              </SmallText>
              <SmallText color={`white cursor-pointer`}>SME Referral</SmallText>
            </div>
          </div>
          <div className="w-[45%] sm:w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              Resources
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white cursor-pointer`}>
                Personal Loan Calculator
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Debt Consolidation Calculator
              </SmallText>
              <SmallText color={`white cursor-pointer`}>
                Home Equity Calculator
              </SmallText>
            </div>
          </div>
          <div className="w-[45%] sm:w-max pr-4">
            <SmallText
              color={"secondary"}
              font={`font-medium uppercase tracking-wide`}
            >
              about fintech
            </SmallText>
            <div className="pt-1">
              <SmallText color={`white cursor-pointer`}>Blog</SmallText>
              <SmallText color={`white cursor-pointer`}>FAQ</SmallText>
              <SmallText color={`white cursor-pointer`}>About Us</SmallText>
              <SmallText color={`white cursor-pointer`}>Contact Us</SmallText>
            </div>
          </div>
          {/* <div className="w-[35%] hidden tab:block">
            <Heading2
              color={`text-white`}
              font={`font-semibold font-poppins leading-tight`}
            >
              Subscribe Newsletter
            </Heading2>
            <SmallText color={`white`}>
              Want to know what we’re up to? Sign up for the newsletter and join
              out tribe
            </SmallText>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                className="p-2 rounded-md w-2/3"
                placeholder="Email Address"
              />
              <button className="bg-gradient-to-l from-[#ffa412] to-[#7cc600] capitalize rounded-md px-6 py-3 text-xs font-semibold text-textColor1">
                subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-4 border-t border-t-secondary">
        <div className="px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto flex items-center justify-between pt-2.5">
          <div className="flex items-center gap-3 sm:gap-5">
            <SmallText
              color={`white`}
              align={`text-left pr-3 sm:pr-5 border-r border-r-secondary`}
              padding={`py-0`}
            >
              © 2025 Fintech
            </SmallText>
            <SmallText
              color={`white`}
              align={`text-left pr-5 border-r border-r-secondary`}
              padding={`py-0`}
            >
              Terms
            </SmallText>
            <SmallText color={`white`}>Privacy</SmallText>
          </div>
          <div className="flex items-center gap-5">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="cursor-pointer"
            />
            <img
              src={instagramIcon}
              alt="instagram icon"
              className="cursor-pointer"
            />
            <img
              src={linkedInIcon}
              alt="linkedIn icon"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
