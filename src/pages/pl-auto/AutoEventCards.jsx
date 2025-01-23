import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import Cars from "../../assets/Cars.png";
import Scooters from "../../assets/Scooters.png";
import Motorcycles from "../../assets/Motorcycles.png";
import GolfCart from "../../assets/GolfCart.png";
import Boats from "../../assets/Boats.png";
import Refinancing from "../../assets/Refinancing.png";
import SectionLayout from "../../ui/SectionLayout";
import FullImageBox from "./FullImageBox";
function AutoEventCards() {
  return (
    <>
      <SectionLayout padding={`pt-8 pb-4`}>
        <div className="w-11/12 m-auto py-6">
          <Heading1 color={`text-titleColor`} align={"text-center"}>
            Find your vehicle, we have the financing options.
          </Heading1>
          <Text align={"text-center"} padding={`py-3`}>
            Conventional automotive financing can be restrictive, especially
            concerning the types of vehicles supported. This is where discerning
            buyers turn to Prosper for customized, flexible financing solutions.
            Here are some of the types of vehicles you can finance through
            Prosper.
          </Text>
        </div>
      </SectionLayout>
      <FullImageBox
        imageLeft={true}
        heading={"Cars"}
        text={
          "Whether it’s a project vehicle or a classic beauty, financing options through Prosper are designed to help you seal the deal, filling the gap when traditional methods fall short. "
        }
      >
        <img
          src={Cars}
          alt="Cars picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Scooters and e-bikes"}
        text={
          "Urbanites increasingly opt for scooters and e-bikes to navigate congested streets and embrace eco-friendly transit. Through Prosper, mobility comes without financial strain, offering fair rates and straightforward payment plans. "
        }
        rowReverese={true}
      >
        <img
          src={Scooters}
          alt="scooters picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Motorcycles"}
        text={
          "For daily commutes or leisurely rides, motorcycles are a popular choice. Whether it’s a stylish cruiser, zippy sport bike, or everyday workhorse, Prosper can facilitate your journey. "
        }
      >
        <img
          src={Motorcycles}
          alt="Motorcycles picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        rowReverese={true}
        heading={"Golf carts, ATVs, and 4-wheelers"}
        text={
          "Anticipating some recreational family bonding? Through Prosper, you can obtain financing for golf carts, ATV’s, 4-wheelers, and more. "
        }
      >
        <img
          src={GolfCart}
          alt="GolfCart picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Boats"}
        text={
          "Roads aren’t a prerequisite for dreams. Finance boats, jet skis, or even submarines through Prosper. Whether it’s for fishing adventures, thrilling water sports, or serene family outings, we pave the way. "
        }
      >
        <img
          src={Boats}
          alt="Boats picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        rowReverese={true}
        heading={"Refinancing"}
        text={
          "Check potential rates with prosper without any impact on your credit score. If there’s been an uptick in your credit health, you could access rates more favorable than your current vehicle financing. Dive into our rate calculator to explore potential savings."
        }
      >
        <img
          src={Refinancing}
          alt="Refinancing picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <SectionLayout padding={`pt-8 pb-4`}>
        <div className="m-auto py-6">
          <Heading1 color={`text-titleColor`} align={"text-center"}>
            FINTECH&apos;s Financing: Tailored, Prompt Solutions
          </Heading1>
          <Text align={"text-center sm:w-4/6 sm:m-auto"} padding={`py-3`}>
            Securing financing for vintage or distinctive vehicles can pose
            challenges. Many lenders may only finance newer models or have
            mileage restrictions. However, Prosper’s options can be an ideal
            match if you’re considering an older vehicle, motorcycle, truck, or
            even a refinancing opportunity.
          </Text>
        </div>
      </SectionLayout>
    </>
  );
}

export default AutoEventCards;
