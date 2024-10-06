import Title from "../../components/Title";
import SectionLayout from "../SectionLayout";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import BlogBox from "./BlogBox";

function BlogContainer() {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto py-2">
        <Title align={"text-center"}>Articles and Media Coverage</Title>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-4 py-4 px-4 sm: h-auto sm:h-[400px] tab:h-[350px]">
        <BlogBox
          img={Blog1}
          heading={
            "11 Ways to Get Your Business's Financial Application Apporoved"
          }
        />
        <BlogBox
          img={Blog2}
          heading={
            "Info: The most common reason for seeking business financing in Bangladesh"
          }
        />
        <BlogBox
          img={Blog3}
          heading={"When to use short time investment for your business?"}
        />
      </div>
    </SectionLayout>
  );
}

export default BlogContainer;
