import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Title from "../components/Title";
import BlogBox from "./BlogBox";
import SectionLayout from "./SectionLayout";

function BlogContainer({ heading, category }) {
  return (
    <SectionLayout>
      <div className="w-11/12 tab:w-3/5 laptop:w-1/2 m-auto py-2">
        <Title align={"text-center"}>
          {heading ? heading : "Articles and Media Coverage"}
        </Title>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 sm:gap-4 py-4 px-4 sm: h-auto sm:h-[450px] tab:h-[400px]">
        <BlogBox
          img={Blog1}
          cat={category}
          heading={
            "11 Ways to Get Your Business's Financial Application Apporoved"
          }
        />
        <BlogBox
          img={Blog2}
          cat={category}
          heading={
            "Info: The most common reason for seeking business financing in Bangladesh"
          }
        />
        <BlogBox
          img={Blog3}
          cat={category}
          heading={"When to use short time investment for your business?"}
        />
      </div>
    </SectionLayout>
  );
}

export default BlogContainer;
