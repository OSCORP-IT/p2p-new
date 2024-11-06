import FullImageBox from "../pl-special/FullImageBox";
import PlasticFees from "../../assets/PlasticFees.png";
import PlasticFacility from "../../assets/PlasticFacility.png";
import PlasticNumber from "../../assets/PlasticNumber.png";
import PlasticPre from "../../assets/PlasticPre.png";
import PlasticPost from "../../assets/PlasticPost.png";
import PlasticTravel from "../../assets/PlasticTravel.png";

function PlasticEventCards() {
  return (
    <div className="py-8">
      <FullImageBox
        imageLeft={true}
        heading={"Surgical fees"}
        text={
          "The primary cost of cosmetic surgery is the surgical fees. Costs are based on the type of procedure and the surgeon’s training and expertise. Don’t look for a bargain—work with an experienced plastic surgeon you trust."
        }
      >
        <img
          src={PlasticFacility}
          alt="Dental Surgical picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Facility fees"}
        text={
          "The surgical facility or hospital where you have cosmetic surgery may charge fees for use of the operating room, equipment, and facility staff."
        }
        rowReverese={true}
      >
        <img
          src={PlasticFees}
          alt="Dental Facility picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Number of treatments"}
        text={
          "Some cosmetic procedures may require additional treatments, touch-ups or multiple rounds."
        }
      >
        <img
          src={PlasticNumber}
          alt="Dental Number picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Pre-operative expensesg"}
        text={
          "Depending on the procedure and your provider, there may be a variety of appointments and tests to undergo before surgery. These can include bloodwork, X-rays, and consultations."
        }
        rowReverese={true}
      >
        <img
          src={PlasticPre}
          alt="Dental Pre picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Recovery and post-operative expenses"}
        text={
          "Costs after surgery often include medications and follow-up appointments. Taking unpaid time off work for your procedure? Use your cosmetic surgery financing to help cover living expenses while you recover."
        }
      >
        <img
          src={PlasticPost}
          alt="Dental Post picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Travel expenses"}
        text={
          "It’s common to travel to meet with a renowned specialist or provider of your choice. Traveling for surgery will add expenses for transportation and hotel to your budget."
        }
        rowReverese={true}
      >
        <img
          src={PlasticTravel}
          alt="Dental Lab picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
    </div>
  );
}

export default PlasticEventCards;
