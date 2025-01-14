import Heading1 from "../../components/Heading1";
import SubHeading from "../../components/SubHeading";
import SectionLayout from "../../ui/SectionLayout";
import BusinessRefer from "../../assets/BusinessRefer.png";
import Text from "../../components/Text";
import PrimaryButton from "../../components/PrimaryButton";

function GetFundReferralForm() {
  return (
    <SectionLayout>
      <div className="w-full px-4 sm:px-0 sm:w-[90%] tab:w-[55%] m-auto">
        <Heading1 color={`textColor4`} align={`text-center leading-tight`}>
          Earn REWARD for every Successful business referral!
        </Heading1>
        <SubHeading
          color={`accent`}
          font={`font-semibold font-poppins`}
          align={`text-center w-full sm:w-3/5 m-auto`}
        >
          know a business that may benefit our Invoice Financing Solution?
        </SubHeading>
        <div className="py-2">
          <img src={BusinessRefer} alt="referral image" />
        </div>
        <Text>
          Help others discover CapBay and share a smarter way of financing with
          businesses you know. Just provide us with the contact details below
          and we will do the rest. You will receive your referral bonus once the
          referred business becomes our transacting customer 😊
        </Text>
        <form className="py-6">
          <div className="border border-gray-300 p-5 rounded-md">
            <div className="-mt-[34px] bg-white w-max">
              <SubHeading padding={`py-0`} color={`primary`}>
                About You
              </SubHeading>
            </div>
            <div>
              <Text>
                Your name <span className="text-red-700">*</span>
              </Text>
              <input
                type="text"
                name="first_name"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div className="py-2">
              <Text>Company name</Text>
              <input
                type="text"
                name="company"
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div>
              <Text>
                Phone Number <span className="text-red-700">*</span>
              </Text>
              <input
                type="text"
                name="phone"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div>
              <Text>
                Your email <span className="text-red-700">*</span>
              </Text>
              <input
                type="email"
                name="email"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div className="py-2">
              <Text>
                Your Relation with FINTECH{" "}
                <span className="text-red-700">*</span>
              </Text>
              <select
                name="relation"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              >
                <option value="">Please Select</option>
                <option value="loan">Loan Client</option>
                <option value="invest">Investor</option>
              </select>
            </div>
          </div>
          <div className="border border-gray-300 p-5 rounded-md mt-8">
            <div className="-mt-[34px] bg-white w-max">
              <SubHeading padding={`py-0`} color={`primary`}>
                Who would you like to refer?
              </SubHeading>
            </div>
            <div>
              <Text>
                Referral name <span className="text-red-700">*</span>
              </Text>
              <input
                type="text"
                name="refer_name"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div className="py-2">
              <Text>Referral Company name</Text>
              <input
                type="text"
                name="referral_company"
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div className="pb-2">
              <Text>
                Referral Designation <span className="text-red-700">*</span>
              </Text>
              <input
                type="text"
                name="designation"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div className="pb-2">
              <Text>
                Referral Phone Number <span className="text-red-700">*</span>
              </Text>
              <input
                type="text"
                name="refer_phone"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div>
              <Text>
                Referral email <span className="text-red-700">*</span>
              </Text>
              <input
                type="email"
                name="refer_email"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
            <div className="py-2">
              <Text>
                Referral Relationship
                <span className="text-red-700">*</span>
              </Text>
              <input
                type="text"
                name="relation_with_you"
                required
                className="border border-gray-400 bg-gray-100 rounded-md w-full p-1.5"
              />
            </div>
          </div>
          <div className="w-max m-auto mt-4">
            <PrimaryButton bg={`accent`} noIcon={true}>
              Submit
            </PrimaryButton>
          </div>
        </form>
      </div>
    </SectionLayout>
  );
}

export default GetFundReferralForm;
