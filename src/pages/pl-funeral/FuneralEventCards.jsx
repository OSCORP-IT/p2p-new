import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import ServiceFees from "../../assets/ServiceFees.png";
import FuneralServices from "../../assets/FuneralServices.png";
import Caskets from "../../assets/Caskets.png";
import Cemetery from "../../assets/Cemetery.png";
import SectionLayout from "../../ui/SectionLayout";
import FullImageBox from "./FullImageBox";
function FuneralEventCards() {
  return (
    <>
      <SectionLayout padding={`pt-8 pb-4`}>
        <div className="w-11/12 m-auto py-6">
          <Heading1 color={`text-titleColor`} align={"text-center"}>
            Funerals are expensive. FINTECH can help
          </Heading1>
          <Text align={"text-center"} padding={`py-3`}>
            In 2021, the average funeral with burial services cost approximately
            $7,848 while a funeral with cremation cost $6,971 on average.
          </Text>
          <Text align={"text-center"} padding={`py-3`}>
            When planning a funeral, understanding its various expenses can help
            you manage your financial obligation.
          </Text>
        </div>
      </SectionLayout>
      <FullImageBox
        imageLeft={true}
        heading={"Service fees"}
        text={
          "Funeral homes charge basic service fees that cover securing permits, obtaining death certificates, overhead expenses, and sheltering remains until cremation or burial."
        }
      >
        <img
          src={ServiceFees}
          alt="ServiceFees picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Funeral services"}
        text={
          "Expenses for funeral services may include costs for using the funeral home facilities for the viewing, funeral ceremony (or memorial service), plus staff and printed materials. "
        }
        rowReverese={true}
      >
        <img
          src={FuneralServices}
          alt="FuneralServices picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Caskets and urns"}
        text={
          "Casket costs vary widely and will depending on the chosen materials. If the deceased’s wishes were to be cremated, an urn or cremation casket would need to be purchased. "
        }
      >
        <img
          src={Caskets}
          alt="Caskets picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        rowReverese={true}
        heading={"Cemetery fees and grave markers"}
        text={
          "Fees can include using a hearse to transport the remains from the funeral home to the burial site and the cost of a limousine (or other transportation) to bring the family to the cemetery. Additionally, you may have to pay for equipment and staff for a graveyard service. Other expenses are burial plots and a headstone or grave markers."
        }
      >
        <img
          src={Cemetery}
          alt="Cemetery picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      {/* <FullImageBox
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
      </FullImageBox> */}
    </>
  );
}

export default FuneralEventCards;
