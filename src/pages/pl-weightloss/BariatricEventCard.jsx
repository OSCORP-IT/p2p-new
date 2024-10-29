import FullImageBox from "../pl-special/FullImageBox";
import Gastric from "../../assets/Gastric.png";
import Bonding from "../../assets/Bonding.png";
import Duodenal from "../../assets/Duodenal.png";
import Sleeve from "../../assets/Sleeve.png";
import PostSurgery from "../../assets/PostSurgery.png";
import Yoga from "../../assets/Yoga.png";

function BariatricEventCard() {
  return (
    <div className="py-8">
      <FullImageBox
        imageLeft={true}
        heading={"Gastric bypass"}
        text={
          "Gastric bypass surgery, also known as Roux-en-Y gastric bypass, is designed to help people who are severely overweight achieve significant weight loss and potentially improve obesity-related health conditions."
        }
      >
        <img
          src={Gastric}
          alt="Gastric picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Gastric bonding"}
        text={
          "Also known as lap-band surgery, gastric banding is considered a less invasive procedure compared to gastric bypass surgery."
        }
        rowReverese={true}
      >
        <img
          src={Bonding}
          alt="Gastro bonding picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Sleeve gastrectomy"}
        text={
          "Sleeve gastrectomy, also known as gastric sleeve surgery, is a bariatric surgery option for individuals who have not achieved significant weight loss through other non-surgical methods."
        }
      >
        <img
          src={Sleeve}
          alt="Sleeve gastro picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Duodenal switch"}
        text={
          "Duodenal switch, also known as biliopancreatic diversion with duodenal switch (BPD/DS), is considered a highly effective weight-loss procedure but is a more complex surgery compared to other bariatric procedures."
        }
        rowReverese={true}
      >
        <img
          src={Duodenal}
          alt="Dental Pre picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Post-surgery appointments"}
        text={
          "While each person’s weight-loss journey is unique, proper post-op care is critical for successful healing."
        }
      >
        <img
          src={PostSurgery}
          alt="Post picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Other related treatments & procedures"}
        text={
          "Loans through Prosper provide affordable access to financing for weight loss and various bariatric expenses. "
        }
        rowReverese={true}
      >
        <img
          src={Yoga}
          alt="Yoga picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
    </div>
  );
}

export default BariatricEventCard;
