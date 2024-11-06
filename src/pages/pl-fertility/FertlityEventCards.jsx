import FullImageBox from "../pl-special/FullImageBox";
import FertilityAssesment from "../../assets/FertilityAssesment.png";
import InVitro from "../../assets/InVitro.png";
import SpermInject from "../../assets/SpermInject.png";
import Egg from "../../assets/Egg.png";
import FertilityMedi from "../../assets/FertilityMedi.png";
import MaleInfertility from "../../assets/MaleInfertility.png";

function FertilityEventCards() {
  return (
    <div className="py-8">
      <FullImageBox
        imageLeft={true}
        heading={"Fertility assessment"}
        text={
          "Medical evaluations conducted to assess an individual’s or couple’s reproductive health and potential to conceive a child can include as many as a dozen different tests, examinations, and analyses."
        }
      >
        <img
          src={FertilityAssesment}
          alt="Dental Surgical picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"In vitro fertilization"}
        text={
          "In vitro fertilization (IVF) can include single or multi-cycle treatments—each involving a complex and costly procedure, with success rates varying depending on individual circumstances, age, and underlying fertility issues.2"
        }
        rowReverese={true}
      >
        <img
          src={InVitro}
          alt="Dental Facility picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Intracytoplasmic sperm injection"}
        text={
          "Intracytoplasmic sperm injection (ICSI) is a specialized technique used when there are issues with sperm quality or quantity, which can result in the sperm having difficulty naturally penetrating the outer layer of the egg."
        }
      >
        <img
          src={Egg}
          alt="Dental Number picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Egg and embryo freezing"}
        text={
          "Egg and embryo freezing, or cryopreservation, preserves embryos for future use by storing them at very low temperatures without damaging their structure and viability."
        }
        rowReverese={true}
      >
        <img
          src={SpermInject}
          alt="Dental Pre picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Fertility medication"}
        text={
          "While each person’s fertility journey is unique, and the medications prescribed will depend on specific underlying causes of fertility issues, powerful medications are now available to support conception."
        }
      >
        <img
          src={FertilityMedi}
          alt="Dental Post picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Male infertility treatments"}
        text={
          "Certain medications, such as hormone therapy, can be prescribed to treat hormonal imbalances or medical conditions that may be affecting sperm production or function."
        }
        rowReverese={true}
      >
        <img
          src={MaleInfertility}
          alt="Dental Lab picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
    </div>
  );
}

export default FertilityEventCards;
