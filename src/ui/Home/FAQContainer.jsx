import { useState } from "react";
import Text from "../../components/Text";

const faqItems = [
  {
    question: "Vestibulum dictum ex sit amet pulvinar laoreet.",
    answer:
      "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.",
  },
  {
    question: "What we like to do & what we don’t like to do",
    answer:
      "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.",
  },
  {
    question: "Integer tristique nisi sit amet consequat pharetra.",
    answer:
      "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.",
  },
  {
    question: "Quisque quis ex eleifend dolor maximus lacinia.",
    answer:
      "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.",
  },
  {
    question: "Mauris ullamcorper tortor sed purus interdum.",
    answer:
      "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.",
  },
];

const FAQContainer = ({ bg, color }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active item if clicked again
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="p-4 w-full mx-auto bg-white rounded-xl shadow-allSide shadow-gray-200 space-y-4">
      {faqItems.map((item, index) => (
        <div key={index}>
          {/* Question Section */}
          <div
            className={`flex rounded-t border-b border-gray-300 px-4 justify-between items-center py-2 cursor-pointer ${
              activeIndex === index
                ? `${
                    bg
                      ? bg
                      : `${
                          color
                            ? `text-${color} bg-primary`
                            : "text-white bg-primary"
                        }`
                  }`
                : "bg-white"
            }
              `}
            onClick={() => handleToggle(index)}
          >
            {activeIndex === index ? (
              <Text color={`${color ? color : "white"}`}>{item.question}</Text>
            ) : (
              <Text>{item.question}</Text>
            )}
            <span className="text-2xl pl-2">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>

          {/* Answer Section */}
          <div
            className={`overflow-hidden px-4 rounded-b ${
              bg ? bg : "bg-primary/10"
            } transition-[max-height] duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40 py-2" : "max-h-0"
            }`}
          >
            <Text color={"gray-600"}>{item.answer}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQContainer;
