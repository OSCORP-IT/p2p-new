import Button from "../../components/Button";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
function RegisterNow() {
  return (
    <SectionLayout bg={`bg-[#0da500]`}>
      <div className="w-11/12 tab:w-5/6 m-auto">
        <SubTitle align={"text-center"} color={`text-white`}>
          Ready to make a positive impact with your investments? Kickstart your
          new investment journey today!
        </SubTitle>
      </div>
      <div className="w-max m-auto pt-8 pb-4">
        <Button bg={`white`} color={`accent shadow-allSide shadow-black/10`}>
          register now
        </Button>
      </div>
    </SectionLayout>
  );
}

export default RegisterNow;
