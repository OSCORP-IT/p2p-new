import { FaCircle } from "react-icons/fa6";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import {
  showForm,
  showFormPage,
  submitPortfolioResponse,
} from "../../services/FormAPI";
import { BiError, BiLoader } from "react-icons/bi";
import AccentButton from "../../components/AccentButton";
import InputMaker from "./InputMaker";
import { useSelector } from "react-redux";
import { buildFromResponse } from "./BuildFromResponse";
import Menu from "../../icon/Menu";
import MenuClose from "../../icon/MenuClose";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function FormContainer({ portfolio_id }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const [formState, setFormState] = useState(initialState);
  const [formPage, setFormPage] = useState(initialState);
  const [currentFormPage, setCurrentFormPage] = useState(0);
  const [currentResponseId, setCurrentResponseId] = useState(null);
  const [currentFormId, setCurrentFormId] = useState(null);
  const [currentFormPageId, setCurrentFormPageId] = useState(null);
  const [currentForm, setCurrentForm] = useState(0);
  const [totalForm, setTotalForm] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [formResponse, setFormResponse] = useState({});
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFormPages = async () => {
      try {
        const data = await showForm(user.userToken, portfolio_id);
        setFormState({
          data: data.result.form_responses[currentForm],
          loading: false,
          error: null,
        });
        setTotalPage(data.result.form_responses[currentForm].form.total_pages);
        setTotalForm(data.result.form_responses.length);
        setCurrentFormId(data.result.form_responses[currentForm].form.id);
        setCurrentResponseId(
          data.result.form_responses[currentForm].form_response_id
        );
        setCurrentFormPageId(
          data.result.form_responses[currentForm].form.form_pages[
            currentFormPage
          ].id
        );
      } catch (error) {
        setFormState({
          data: null,
          loading: false,
          error: "Error fetching form pages",
        });
      }
    };
    fetchFormPages();
  }, [portfolio_id, user.userToken, currentForm, currentFormPage]);
  useEffect(() => {
    setFormPage({
      data: null,
      loading: true,
      error: null,
    });
    const fetchPageFields = async () => {
      if (formState.data) {
        try {
          const data = await showFormPage(
            portfolio_id,
            currentFormId,
            currentFormPageId,
            currentResponseId,
            user.userToken
          );
          // console.log("Fetched page fields data:", data); // Check the page fields data structure
          {
            data && setFormResponse(() => buildFromResponse(data));
          }
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
  }, [
    portfolio_id,
    user.userToken,
    formState.data,
    currentFormPageId,
    currentFormId,
    currentResponseId,
  ]);
  async function handleData() {
    if (totalPage === currentFormPage + 1) {
      if (totalForm === currentForm + 1) {
        return;
      } else {
        try {
          const data = await submitPortfolioResponse(
            formResponse,
            user.userToken
          );
          console.log(data);
          if (data.success) {
            setCurrentForm((cf) => cf + 1);
          } else throw new Error();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      try {
        const data = await submitPortfolioResponse(
          formResponse,
          user.userToken
        );
        if (data.success) {
          setCurrentFormPage((cp) => cp + 1);
          setCurrentFormId(() => formState.data.form.id);
          setCurrentFormPageId(
            () => formState.data.form.form_pages[currentFormPage].id
          );
        } else throw new Error();
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <div className="fixed top-3 left-2 bg-white p-2" onClick={toggleExpand}>
        {expanded ? <MenuClose /> : <Menu />}
      </div>
      {/* <div className="flex gap-2 items-start p-2 border border-black">
        <h1>{`Total Form: ${totalForm}`}</h1>
        <h1>{`Current Form: ${currentForm + 1}`}</h1>
        {formState.data && (
          <h1>{`Current Form Response ID: ${formState.data.form_response_id}`}</h1>
        )}
        {formState.data && (
          <h1>{`Current Form ID: ${formState.data.form.id}`}</h1>
        )}
        <h1>{`Current Page: ${currentFormPage}`}</h1>
        <h1>{`Total Page: ${totalPage}`}</h1>
      </div> */}
      <button onClick={handleData}>Click 1</button>
      {formState.loading && (
        <div className="flex gap-2 items-center">
          <BiLoader className=" animate-spin" />
          <Text>Loading</Text>
        </div>
      )}
      {formState.error && (
        <div className="flex gap-2 animate-pulse items-center m-auto w-max h-max">
          <BiError className="text-red-900 text-3xl" />
          <Title>Error Loading Form</Title>
        </div>
      )}

      <div className="relative flex items-start gap-5 sm:px-5">
        {formState.data && (
          <>
            <div className="block sm:w-[30%] bg-white rounded-md sm:p-[15px]">
              {formState.data.form.form_pages.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 border-2 ${
                        index < currentFormPage
                          ? "border-accent bg-accent"
                          : index > currentFormPage
                          ? "border-textColor3/50 bg-white"
                          : "border-accent bg-white"
                      } rounded-full m-auto sm:m-0`}
                    >
                      <FaCircle
                        className={`text-[6px] ${
                          index + 1 < currentFormPage
                            ? "text-white"
                            : index + 1 > currentFormPage
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
                  {formState.data.form.total_pages !== index + 1 && (
                    <div
                      className={`h-[15px] w-[15px] border-r-2 border-accent ${
                        index + 1 < currentFormPage
                          ? "border-accent"
                          : "border-textColor3/50"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={`sm:hidden absolute top-0 left-0 min-h-screen ${
                expanded ? "w-5/6" : "w-1/6"
              } transition-all duration-500 ease-in-out bg-white rounded-lg`}
            >
              {formState.data.form.form_pages.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2 py-1">
                    <div
                      className={`p-2 border-2 ${
                        index < currentFormPage
                          ? "border-accent bg-accent"
                          : index > currentFormPage
                          ? "border-textColor3/50 bg-white"
                          : "border-accent bg-white"
                      } rounded-full ${expanded ? "" : "m-auto"}`}
                    >
                      <FaCircle
                        className={`text-[6px] ${
                          index + 1 < currentFormPage
                            ? "text-white"
                            : index + 1 > currentFormPage
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
                  {formState.data.form.total_pages !== index + 1 && (
                    <div
                      className={`${
                        expanded ? "w-[15px] h-[20px]" : "w-[5px] h-[15px]"
                      } ${
                        expanded ? "m-0" : "m-auto"
                      } border-r-2 border-accent ${
                        index + 1 < currentFormPage
                          ? "border-accent"
                          : "border-textColor3/50"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        {formPage.loading && (
          <div className="flex gap-2 items-center">
            <BiLoader className=" animate-spin" />
            <Text>Loading</Text>
          </div>
        )}
        {formPage.data && (
          <>
            <div className="w-[15%] sm:hidden"></div>
            <div className="w-[80%] sm:w-[70%] bg-white rounded-md p-[15px]">
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

              {currentFormPage < totalPage && (
                <div className="flex items-center gap-4">
                  {currentFormPage !== 1 && (
                    <div
                      className="w-max m-auto pt-8"
                      onClick={() => setCurrentFormPage(currentFormPage - 1)}
                    >
                      <AccentButton leftIcon={true}>Previous Page</AccentButton>
                    </div>
                  )}
                  <div
                    className="w-max m-auto pt-8"
                    onClick={() => setCurrentFormPage(currentFormPage + 1)}
                  >
                    <AccentButton>Next Page</AccentButton>
                  </div>
                </div>
              )}
              {currentFormPage == totalPage && (
                <div className="flex items-center gap-4">
                  <div
                    className="w-max m-auto pt-8"
                    onClick={() => setCurrentFormPage(currentFormPage - 1)}
                  >
                    <AccentButton leftIcon={true}>Previous Page</AccentButton>
                  </div>
                  <div className="w-max m-auto pt-8">
                    <AccentButton>Submit</AccentButton>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default FormContainer;
