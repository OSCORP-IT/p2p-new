import { FaCircle } from "react-icons/fa6";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import { useEffect, useState } from "react";
import { showForm, showFormPage } from "../../services/FormAPI";
import { BiError, BiLoader } from "react-icons/bi";
const initialState = {
  data: null,
  loading: true,
  error: null,
};

function FormContainer() {
  const [formState, setFormState] = useState(initialState);
  const [formPage, setFormPage] = useState(initialState);
  const [currentFormPage, setCurrentFormPage] = useState(1);

  useEffect(() => {
    const fetchFormPages = async () => {
      try {
        const data = await showForm(`1`, `1`);
        setFormState({
          data,
          loading: false,
          error: null,
        });
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
    const fetchPageFields = async () => {
      try {
        // const formId = formState.data?.result?.form?.id;
        // if (!formId) {
        //   console.error("Form ID not found in data:", formState.data);
        //   return;
        // }
        // console.log(
        //   "Fetching fields for form ID:",
        //   formId,
        //   "page:",
        //   currentFormPage
        // );

        const data = await showFormPage(1, 1, 1);
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
  }, []);
  console.log(formPage.data);
  return (
    <>
      {formState.loading && (
        <div className="flex gap-2 items-center">
          <BiLoader className=" animate-spin" />
          <Text>Loading</Text>
        </div>
      )}
      {formState.error && (
        <div className="flex gap-2 animate-bounce items-center">
          <BiError className="text-red-900" />
          <Text>Error Loading Form</Text>
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
        {formPage.data && (
          <div className="w-[70%] bg-white rounded-md p-[15px]">
            {formPage.data.result.form_page.form_fields.map((item, index) => (
              <input type="text" key={`index`} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default FormContainer;
