import AccentButton from "../components/AccentButton";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import InfoButton from "../components/InfoButton";
import PrimaryButton from "../components/PrimaryButton";
import SmallText from "../components/SmallText";
import SubHeading from "../components/SubHeading";
import Text from "../components/Text";
import Title from "../components/Title";

function Home() {
  return (
    <div className="m-auto w-[600px]">
      <Title>Home</Title>
      <Heading1>Personal Loans</Heading1>
      <Heading2>Personal Loans</Heading2>
      <SubHeading>Sub-Heading</SubHeading>
      <Text>Text </Text>
      <SmallText>Small Text</SmallText>
      <PrimaryButton>Get Started With Your Preferred Loan</PrimaryButton>
      <br />
      <AccentButton>Get Fund Now</AccentButton>
      <br />
      <InfoButton>Read More</InfoButton>
    </div>
  );
}

export default Home;
