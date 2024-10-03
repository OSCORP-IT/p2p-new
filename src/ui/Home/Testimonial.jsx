import { useState } from "react";
import Heading1 from "../../components/Heading1";
import Text from "../../components/Text";
import SubHeading from "../../components/SubHeading";
import SmallText from "../../components/SmallText";
import Quote from "../../icon/Quote";
import SectionLayout from "../SectionLayout";

const testimonials = [
  {
    id: 1,
    name: "Abidur Rahman1",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt sem consectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Abidur Rahman2",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt sem consectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Abidur Rahman3",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt sem consectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Abidur Rahman5",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt sem consectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Abidur Rahman4",
    country: "Bangladesh",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt sem consectetur lorem tempor feugiat suscipit porttitor. Ullamcorper sit amet nam semper pretium.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle slide

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Move to next testimonial
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    ); // Move to previous testimonial
  };

  // Helper function to get the surrounding testimonials (left and right)
  const getVisibleTestimonials = (index) => {
    const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (index + 1) % testimonials.length;

    return {
      left: testimonials[prevIndex],
      center: testimonials[index],
      right: testimonials[nextIndex],
    };
  };

  const { left, center, right } = getVisibleTestimonials(currentIndex);

  return (
    <SectionLayout bg={"bg-gray-100"}>
      <div className="py-10 ">
        <Heading1 padding={"py-4 "} align={"text-center"}>
          Trusted Across Industries
        </Heading1>

        <div className="flex justify-center items-center py-10 w-full gap-1">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-transparent text-primary p-3 rounded-full hover:bg-accent/10 w-[5%]"
          >
            {`<`}
          </button>

          {/* Testimonial Cards */}
          <div className="flex justify-center items-center w-[90%]">
            {/* Left Card */}
            <div className="w-1/3 hidden sm:block">
              <div className="bg-white text-gray-700 p-6 rounded-lg shadow-md transition-all duration-700">
                <div className="w-max m-auto pb-3">
                  <Quote />
                </div>
                <Text align={"text-center"} padding={"pb-3"}>
                  {left.message}
                </Text>
              </div>
              <div className="w-max m-auto -mt-5 z-10">
                <div className="flex items-center w-max m-auto">
                  <img
                    src={left.avatar}
                    alt={left.name}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <SubHeading align={"text-center"}>{left.name}</SubHeading>
                <SmallText align={"text-center"}>{left.country}</SmallText>
              </div>
            </div>

            {/* Center Card */}
            <div className="sm:-mt-12 w-full sm:w-1/3">
              <div className="bg-primary text-white p-6 rounded-lg shadow-md transition-all duration-700">
                <div className="w-max m-auto pb-3">
                  <Quote />
                </div>
                <Text align={"text-center"} padding={"pb-3"} color={"white"}>
                  {center.message}
                </Text>
              </div>
              <div className="w-max m-auto -mt-5 z-10">
                <div className="flex items-center w-max m-auto">
                  <img
                    src={center.avatar}
                    alt={center.name}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <SubHeading align={"text-center"}>{center.name}</SubHeading>
                <SmallText align={"text-center"}>{center.country}</SmallText>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden sm:block w-1/3">
              <div className="bg-white text-gray-700 p-6 rounded-lg shadow-md transition-all duration-700">
                <div className="w-max m-auto pb-3">
                  <Quote />
                </div>
                <Text align={"text-center"} padding={"pb-3"}>
                  {right.message}
                </Text>
              </div>
              <div className="w-max m-auto -mt-5 z-10">
                <div className="flex items-center w-max m-auto">
                  <img
                    src={right.avatar}
                    alt={right.name}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <SubHeading align={"text-center"}>{right.name}</SubHeading>
                <SmallText align={"text-center"}>{right.country}</SmallText>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-transparent  w-[5%] text-primary p-3 rounded-full hover:bg-accent/10"
          >
            {`>`}
          </button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Testimonial;
