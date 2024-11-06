import FullImageBox from "../pl-special/FullImageBox";
import Psychotherapy from "../../assets/Psychotherapy.png";
import Theraputic from "../../assets/Theraputic.png";
import Addiction from "../../assets/Addiction.png";
import Residential from "../../assets/Residential.png";
import Impatient from "../../assets/Impatient.png";
import Wilderness from "../../assets/Wilderness.png";

function MentalEventCards() {
  return (
    <div className="py-8">
      <FullImageBox
        imageLeft={true}
        heading={"Psychotherapy/counseling"}
        text={
          "Many different forms of psychotherapy, talk therapy, and counseling can help with understanding thoughts, emotions, behaviors, and interpersonal relationships in a more meaningful and constructive way."
        }
      >
        <img
          src={Psychotherapy}
          alt="Dental Surgical picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Addiction recovery"}
        text={
          "From inpatient and outpatient programs to various forms of counseling and therapy, there are many different options for addiction treatment."
        }
        rowReverese={true}
      >
        <img
          src={Addiction}
          alt="Dental Facility picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Residential facilities"}
        text={
          "Residential facilities can provide supportive living environments for those with mental health challenges, offering a structured and therapeutic setting and ongoing care and support."
        }
      >
        <img
          src={Residential}
          alt="Dental Number picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Inpatient treatment & day programs"}
        text={
          "Treatment centers offer a variety of long and short-term stays as well as various day programs for intensive mental health treatment and recovery."
        }
        rowReverese={true}
      >
        <img
          src={Impatient}
          alt="Dental Pre picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageLeft={true}
        heading={"Wilderness therapy"}
        text={
          "Wilderness therapy is an experiential and holistic approach to mental health treatment, set in nature and designed for individuals struggling with emotional, behavioral, or psychological issues."
        }
      >
        <img
          src={Wilderness}
          alt="Dental Post picure"
          className="rounded-md sm:rounded-none sm:rounded-r-[20px] tab:rounded-r-[40px]"
        />
      </FullImageBox>
      <FullImageBox
        imageRight={true}
        heading={"Therapeutic boarding schools"}
        text={
          "Specialized educational institutions provide a structured and supportive environment where students can receive academic education while also addressing their emotional and psychological needs."
        }
        rowReverese={true}
      >
        <img
          src={Theraputic}
          alt="Dental Lab picure"
          className="rounded-md sm:rounded-none sm:rounded-l-[20px] tab:rounded-l-[40px]"
        />
      </FullImageBox>
    </div>
  );
}

export default MentalEventCards;
