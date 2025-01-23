import { FaCircle } from "react-icons/fa6";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  showForm,
  showFormPage,
  submitPortfolioResponse,
} from "../../services/FormAPI";
import { BiError } from "react-icons/bi";
import AccentButton from "../../components/AccentButton";
import InputMaker from "./InputMaker";
import { useSelector } from "react-redux";
import { buildFromResponse } from "./BuildFromResponse";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function FormContainer({ portfolio_id, expanded }) {
  const [allPages, setAllPages] = useState(initialState);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formPage, setFormPage] = useState(initialState);
  const [totalPages, setTotalPages] = useState(1);
  const [formResponse, setFormResponse] = useState({});
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFormPages = async () => {
      try {
        const data = await showForm(user.userToken, portfolio_id);
        setAllPages({
          data: data.result.form_response_all_pages,
          loading: false,
          error: null,
        });
        setTotalPages(data.result.form_response_all_pages.length);
      } catch (error) {
        setAllPages({
          data: null,
          loading: false,
          error: "Error fetching form pages",
        });
      }
    };
    fetchFormPages();
  }, [portfolio_id, user.userToken]);
  useEffect(() => {
    setFormPage({
      data: null,
      loading: true,
      error: null,
    });
    const fetchPageFields = async () => {
      if (allPages.data) {
        try {
          const data = await showFormPage(
            portfolio_id,
            allPages.data[currentIndex].form_id, // currentFormId,
            allPages.data[currentIndex].id, // currentFormPageId,
            allPages.data[currentIndex].form_response_id, // currentResponseId,
            user.userToken
          );
          // console.log("Fetched page fields data:", data); // Check the page fields data structure
          {
            data && setFormResponse(() => buildFromResponse(data));
          }
          console.log(data);
          setFormPage({
            data: data.result,
            loading: false,
            error: null,
          });
        } catch (error) {
          setFormPage({
            data: null,
            loading: false,
            error: "Error fetching form pages",
          });
        }
      }
    };
    fetchPageFields();
  }, [user.userToken, portfolio_id, allPages.data, currentIndex]);
  async function handleNextData(e) {
    e.preventDefault();
    if (currentIndex + 1 === totalPages) {
      try {
        const data = await submitPortfolioResponse(
          portfolio_id,
          allPages.data[currentIndex].form_id, // currentFormId,
          allPages.data[currentIndex].id, // currentFormPageId,
          allPages.data[currentIndex].form_response_id, // currentResponseId,
          formResponse,
          user.userToken
        );
        if (data.success) {
          navigate("/user/my-loans");
        } else throw new Error();
      } catch (error) {
        setFormPage({
          data: null,
          loading: false,
          error: "Error fetching form pages",
        });
      }
    } else {
      try {
        const data = await submitPortfolioResponse(
          portfolio_id,
          allPages.data[currentIndex].form_id, // currentFormId,
          allPages.data[currentIndex].id, // currentFormPageId,
          allPages.data[currentIndex].form_response_id, // currentResponseId,
          formResponse,
          user.userToken
        );
        if (data.success) {
          setCurrentIndex(currentIndex + 1);
        } else throw new Error();
      } catch (error) {
        setFormPage({
          data: null,
          loading: false,
          error: "Error fetching form pages",
        });
      }
    }
  }
  // async function handleSubmit() {
  //   try {
  //     const data = await submitPortfolioResponse(
  //       portfolio_id,
  //       allPages.data[currentIndex].form_id, // currentFormId,
  //       allPages.data[currentIndex].id, // currentFormPageId,
  //       allPages.data[currentIndex].form_response_id, // currentResponseId,
  //       formResponse,
  //       user.userToken
  //     );
  //     if (data.success) {
  //       navigate("/user/my-loans");
  //     } else throw new Error();
  //   } catch (error) {
  //     setFormPage({
  //       data: null,
  //       loading: false,
  //       error: "Error fetching form pages",
  //     });
  //   }
  // }
  function handlePrevData() {
    setCurrentIndex(currentIndex - 1);
  }
  return (
    <SkeletonTheme baseColor="#ff6b001a" highlightColor="#fff">
      {allPages.loading && (
        <div className="flex items-start gap-8">
          <div className="w-1/5">
            <Skeleton count={4} />
          </div>
          <div className="w-4/5">
            <Skeleton count={10} />
          </div>
        </div>
      )}
      {allPages.error && (
        <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
          <BiError className="text-red-900 text-3xl" />
          <Title>Error Loading Form</Title>
        </div>
      )}

      <div className="relative flex items-start gap-3 sm:gap-5 sm:px-5">
        {allPages.data && (
          <>
            <div className="hidden sm:block sm:w-[30%] bg-white rounded-md sm:p-[15px]">
              {allPages.data.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 border-2 ${
                        index < currentIndex
                          ? "border-accent bg-accent"
                          : index > currentIndex
                          ? "border-textColor3/50 bg-white"
                          : "border-accent bg-white"
                      } rounded-full m-auto sm:m-0`}
                    >
                      <FaCircle
                        className={`text-[6px] ${
                          index < currentIndex
                            ? "text-white"
                            : index > currentIndex
                            ? "text-textColor3/50"
                            : "text-accent"
                        }`}
                      />
                    </div>
                    <div className="hidden sm:block">
                      <SmallText padding={`p-0`}>Step {index + 1}</SmallText>
                      <Text padding={`p-0`} font={`font-semibold`}>
                        {item.title}
                      </Text>
                    </div>
                  </div>
                  {totalPages !== index + 1 && (
                    <div
                      className={`h-[15px] w-[15px] border-r-2 border-accent ${
                        index + 1 < 1 ? "border-accent" : "border-textColor3/50"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={`sm:hidden absolute top-0 left-0 h-full ${
                expanded ? "w-5/6 pl-2" : "w-1/6"
              } transition-all duration-500 ease-in-out bg-white rounded-lg`}
            >
              {allPages.data.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2 py-1">
                    <div
                      className={`p-2 border-2 ${
                        index < currentIndex
                          ? "border-accent bg-accent"
                          : index > currentIndex
                          ? "border-textColor3/50 bg-white"
                          : "border-accent bg-white"
                      } rounded-full ${expanded ? "" : "m-auto"}`}
                    >
                      <FaCircle
                        className={`text-[6px] ${
                          index + 1 < 1
                            ? "text-white"
                            : index + 1 > 1
                            ? "text-textColor3/50"
                            : "text-accent"
                        }`}
                      />
                    </div>
                    <div className={expanded ? `block ` : `hidden`}>
                      <SmallText padding={`p-0`}>Step {index + 1}</SmallText>
                      <Text padding={`p-0`} font={`font-semibold`}>
                        {item.title}
                      </Text>
                    </div>
                  </div>
                  {totalPages !== index + 1 && (
                    <div
                      className={`${
                        expanded ? "w-[15px] h-[20px]" : "w-[5px] h-[15px]"
                      } ${
                        expanded ? "m-0" : "m-auto"
                      } border-r-2 border-accent ${
                        index + 1 < 1 ? "border-accent" : "border-textColor3/50"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        {!allPages.loading && formPage.loading && (
          <div className="flex items-start gap-8 w-full pt-8">
            <div className="w-1/6"></div>
            <div className="w-5/6 flex items-center justify-center gap-2">
              <AiOutlineLoading className="animate-spin" />
              <Text>Loading Forms</Text>
            </div>
          </div>
        )}
        {formPage.data && (
          <>
            <div className="w-1/6 sm:hidden"></div>
            <div className="w-5/6 sm:w-[70%] bg-white rounded-md p-2 sm:p-[15px]">
              <form onSubmit={handleNextData}>
                {formPage.data.response_answer.map((item, index) => (
                  <div key={item.id} className="w-full">
                    <InputMaker
                      item={item}
                      index={index}
                      data={formResponse}
                      setData={setFormResponse}
                    />
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
                  {currentIndex > 0 && (
                    <div
                      className="w-full sm:w-max m-auto pt-8"
                      onClick={handlePrevData}
                    >
                      <AccentButton
                        disabled={formPage.loading}
                        width={`w-full`}
                        leftIcon={true}
                      >
                        Previous Page
                      </AccentButton>
                    </div>
                  )}
                  {currentIndex + 1 < totalPages && (
                    <div className="w-full sm:w-max m-auto sm:pt-8">
                      <AccentButton
                        disabled={formPage.loading}
                        width={`w-full`}
                        type={`submit`}
                      >
                        Next Page
                      </AccentButton>
                    </div>
                  )}
                  {currentIndex + 1 === totalPages && (
                    <div className="w-full sm:w-max m-auto sm:pt-8">
                      <AccentButton
                        disabled={formPage.loading}
                        width={`w-full`}
                        type={`submit`}
                      >
                        Submit
                      </AccentButton>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </SkeletonTheme>
  );
}

export default FormContainer;
