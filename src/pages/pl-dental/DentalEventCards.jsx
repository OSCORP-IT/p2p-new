import FullImageBox from "../pl-special/FullImageBox";
import DentalSurgical from "../../assets/DentalSurgical.png";
import DentalFacility from "../../assets/DentalFacility.png";
import DentalNumber from "../../assets/DentalNumber.png";
import DentalPre from "../../assets/DentalPre.png";
import DentalPost from "../../assets/DentalPost.png";
import DentalLab from "../../assets/DentalLab.png";

function DentalEventCards() {
  return (
    <div className="py-8">
      <FullImageBox
        imageLeft={true}
        heading={"Surgical fees"}
        text={
          "The primary cost of dental surgery is the surgical fees. Costs are based on the type of procedure, the dental surgeon’s training, and the level of complexity. Your dentist’s office should provide an estimate of costs before your procedure."
        }
      >
        <img
          src={DentalSurgical}
          alt="Dental Surgical picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Facility fees"}
        text={
          "If the procedure is performed outside of your provider’s normal office, such as in a specialized surgical facility, there may be fees for use of the operating room, equipment, and facility staff."
        }
        rowReverese={true}
      >
        <img
          src={DentalFacility}
          alt="Dental Facility picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Number of treatments"}
        text={
          "If your dental surgery is part of a broader treatment plan that involves other dental procedures, don’t forget to consider the costs of these additional treatments in your budget."
        }
      >
        <img
          src={DentalNumber}
          alt="Dental Number picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Pre-operative expenses"}
        text={
          "Before any dental surgery or cosmetic procedure, your dentist may create a treatment plan which may include X-rays and consultations with specialists. These costs can add up quickly if not covered by insurance."
        }
        rowReverese={true}
      >
        <img
          src={DentalPre}
          alt="Dental Pre picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Recovery and post-operative expenses"}
        text={
          "Costs after surgery may include follow-up appointments and medications to manage pain and prevent infections. If you need to take unpaid time off work for your procedure, dental loans can help cover living expenses."
        }
      >
        <img
          src={DentalPost}
          alt="Dental Post picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Laboratory costs"}
        text={
          "Certain dental surgeries, like dental implants or crowns, may require custom prosthetics. The costs for dental appliances can vary—get an estimate from your doctor so you can be sure your dental loan will cover everything."
        }
        rowReverese={true}
      >
        <img
          src={DentalLab}
          alt="Dental Lab picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
    </div>
  );
}

export default DentalEventCards;
