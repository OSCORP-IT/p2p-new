import { FaCircle } from "react-icons/fa6";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { showForm, showFormPage } from "../../services/FormAPI";
import { BiError, BiLoader } from "react-icons/bi";
import AccentButton from "../../components/AccentButton";
import InputMaker from "./InputMaker";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function FormContainer() {
  const [formState, setFormState] = useState(initialState);
  const [formPage, setFormPage] = useState(initialState);
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [formResponses, setFormResponses] = useState({});

  useEffect(() => {
    const fetchFormPages = async () => {
      try {
        const data = await showForm(`1`, `1`);
        setFormState({
          data,
          loading: false,
          error: null,
        });
        setTotalPage(data.result.form.total_pages);
      } catch (error) {
        setFormState({
          data: null,
          loading: false,
          error: "Error fetching form pages",
        });
      }
    };
    fetchFormPages();
  }, []);
  useEffect(() => {
    setFormPage({
      data: null,
      loading: true,
      error: null,
    });
    const fetchPageFields = async () => {
      try {
        const data = await showFormPage(1, 1, currentFormPage);
        console.log("Fetched page fields data:", data); // Check the page fields data structure
        setFormPage({
          data,
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
    };
    fetchPageFields();
  }, [currentFormPage]);
  return (
    <>
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

      <div className="flex items-start gap-5 px-5">
        {formState.data && (
          <div className="w-[30%] bg-white rounded-md p-[15px]">
            {formState.data.result.form.form_pages.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center gap-2">
                  <div
                    className={`p-2 border-2 ${
                      index + 1 < currentFormPage
                        ? "border-accent bg-accent"
                        : index + 1 > currentFormPage
                        ? "border-textColor3/50 bg-white"
                        : "border-accent bg-white"
                    } rounded-full`}
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
                  <div>
                    <SmallText padding={`p-0`}>Step {index + 1}</SmallText>
                    <Text padding={`p-0`} font={`font-semibold`}>
                      {item.title}
                    </Text>
                  </div>
                </div>
                {formState.data.result.form.total_pages !== index + 1 && (
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
        )}
        {formPage.loading && (
          <div className="flex gap-2 items-center">
            <BiLoader className=" animate-spin" />
            <Text>Loading</Text>
          </div>
        )}
        {formPage.data && (
          <div className="w-[70%] bg-white rounded-md p-[15px]">
            {formPage.data.result.form_page.form_fields.map((item) => (
              <div key={item.id} className="w-full">
                <InputMaker item={item} />
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
        )}
      </div>
    </>
  );
}

export default FormContainer;
