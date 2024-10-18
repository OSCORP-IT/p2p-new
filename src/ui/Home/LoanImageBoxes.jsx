import Heading1 from "../../components/Heading1";
import Heading2 from "../../components/Heading2";
import Title from "../../components/Title";
import Checks from "../../icon/Checks";
import Text from "../../components/Text";
import PersonalLoan from "../../assets/personalLoan.png";
import CreditCard from "../../assets/creditCard.png";
import HomeLoan from "../../assets/HomeLoan.png";
import Invest from "../../assets/Investment.png";
import SectionLayout from "../SectionLayout";
import Button from "../../components/Button";
function LoanImageBoxes() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto">
        <Title align={"text-center"}>
          Meet your financial needs Find peace of mind
        </Title>
      </div>
      <div className="px-10 pt-4">
        <div className="py-6 flex items-start justify-between">
          <div className="w-full sm:w-1/2 flex flex-col items-start justify-start">
            <Heading2
              padding={"capitalize"}
              align={"w-full text-center sm:text-left"}
            >
              take control
            </Heading2>
            <Heading1
              padding={"py-1 tab:py-2 capitalize"}
              align={"text-center w-full sm:text-left"}
            >
              personal loans
            </Heading1>
            <div className="my-4 w-full sm:hidden bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
              <img
                src={PersonalLoan}
                alt="Personal Loan"
                className="w-full max-w-xs md:max-w-full h-auto"
              />
            </div>
            <div className="flex items-start gap-2 tab:pt-2">
              <Checks />
              <Text>Borrow up to $50K</Text>
            </div>
            <div className="flex items-start gap-2 tab:pt-2">
              <Checks />
              <Text>Next-day funding</Text>
            </div>
            <div className="flex items-start gap-2 tab:pt-2">
              <Checks />
              <Text>No pre-payment penalty</Text>
            </div>
            <div className="py-2 w-max m-auto sm:m-0">
              <Button>Explore</Button>
            </div>
          </div>
          <div className="w-1/2 hidden sm:block bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
            <img
              src={PersonalLoan}
              alt="Personal Loan"
              className="w-full max-w-xs md:max-w-full h-auto"
            />
          </div>
        </div>
        <div className="py-6 mt-4 tab:mt-8 flex items-start justify-between">
          <div className="hidden sm:block w-1/2 bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
            <img
              src={CreditCard}
              alt="Personal Loan"
              className="w-full max-w-xs md:max-w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-end justify-start">
            <div>
              <Heading2
                padding={"capitalize"}
                align={"w-full text-center sm:text-left"}
              >
                find freedom
              </Heading2>
              <Heading1
                padding={"py-1 tab:py-2 capitalize"}
                align={"text-center w-full sm:text-left"}
              >
                credit card
              </Heading1>
              <div className="my-4 w-full sm:hidden bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
                <img
                  src={CreditCard}
                  alt="Personal Loan"
                  className="w-full max-w-xs md:max-w-full h-auto"
                />
              </div>
              <div className="flex items-start gap-2 tab:pt-2">
                <Checks />
                <Text>Up to $3,000 credit limit</Text>
              </div>
              <div className="flex items-start gap-2 tab:pt-2">
                <Checks />
                <Text>Zero fraud liability</Text>
              </div>
              <div className="flex items-start gap-2 tab:pt-2">
                <Checks />
                <Text>No security deposit required</Text>
              </div>
              <div className="py-2 w-max m-auto sm:m-0">
                <Button>Explore</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 mt-4 tab:mt-8 flex items-start justify-between">
          <div className="w-full sm:w-1/2 flex flex-col items-start justify-start">
            <Heading2
              padding={"capitalize"}
              align={"w-full text-center sm:text-left"}
            >
              leverage your home equity
            </Heading2>
            <Heading1
              padding={"py-1 tab:py-2 capitalize"}
              align={"text-center w-full sm:text-left"}
            >
              home equity
            </Heading1>
            <div className="my-4 w-full sm:hidden bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
              <img
                src={HomeLoan}
                alt="Personal Loan"
                className="w-full max-w-xs md:max-w-full h-auto"
              />
            </div>
            <div className="flex items-start gap-2 tab:pt-2">
              <Checks />
              <Text>Access up to $500,000</Text>
            </div>
            <div className="flex items-start gap-2 tab:pt-2">
              <Checks />
              <Text>Low-rate HELOCs & HELoans</Text>
            </div>
            <div className="flex items-start gap-2 tab:pt-2">
              <Checks />
              <Text>Apply in minutes</Text>
            </div>
            <div className="py-2 w-max m-auto sm:m-0">
              <Button>Explore</Button>
            </div>
          </div>
          <div className="hidden sm:block w-1/2 bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
            <img
              src={HomeLoan}
              alt="Home Loan"
              className="w-full max-w-xs md:max-w-full h-auto rounded-md"
            />
          </div>
        </div>
        <div className="py-6 mt-4 tab:mt-8 flex items-start justify-between">
          <div className="hidden sm:block w-1/2 bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
            <img
              src={Invest}
              alt="Investments"
              className="w-full max-w-xs md:max-w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-end justify-start">
            <div>
              <Heading2
                padding={"capitalize"}
                align={"w-full text-center sm:text-left"}
              >
                diversify & do good
              </Heading2>
              <Heading1
                padding={"py-1 tab:py-2 capitalize"}
                align={"text-center w-full sm:text-left"}
              >
                investments
              </Heading1>
              <div className="my-4 w-full sm:hidden bg-white shadow-allSide shadow-dropShadow rounded-md tab:px-2 tab:pt-2">
                <img
                  src={Invest}
                  alt="Personal Loan"
                  className="w-full max-w-xs md:max-w-full h-auto"
                />
              </div>
              <div className="flex items-start gap-2 tab:pt-2">
                <Checks />
                <Text>Invest in personal loans</Text>
              </div>
              <div className="flex items-start gap-2 tab:pt-2">
                <Checks />
                <Text>Avg. historical returns: 5.5%</Text>
              </div>
              <div className="flex items-start gap-2 tab:pt-2">
                <Checks />
                <Text>Empower real people</Text>
              </div>
              <div className="py-2 w-max m-auto sm:m-0">
                <Button>Explore</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default LoanImageBoxes;
