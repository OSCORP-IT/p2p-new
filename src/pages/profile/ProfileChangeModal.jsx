import { useEffect, useRef, useState } from "react";
import Heading2 from "../../components/Heading2";
import { updateProfileImage } from "../../services/FileUpload";
import { postUpdateProfile } from "../../services/profile";
import Text from "../../components/Text";
import { useDispatch } from "react-redux";
import { profileImageChange } from "../../features/authentication/authSlice";
import { BiCheck } from "react-icons/bi";

function ProfileChangeModal({
  setShowProfileChange,
  user,
  userData,
  setUserData,
}) {
  const middleRef = useRef(null);
  const dispatch = useDispatch();
  const [fileUrl, setFileUrl] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (middleRef.current && !middleRef.current.contains(event.target)) {
        setShowProfileChange(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowProfileChange]);
  useEffect(() => {
    async function fetchUserData() {
      if (fileUrl) {
        try {
          setIsLoading(true);
          const data = await postUpdateProfile(user.userToken, userData);
          if (data.success) setIsSuccess(true);
          dispatch(profileImageChange(fileUrl));
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    fetchUserData();
  }, [fileUrl, userData, user.userToken, dispatch]);
  async function handleUpload(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setIsSuccess(false);
      setIsLoading(true);
      try {
        const result = await updateProfileImage(user.userToken, file);
        setUserData((prev) => ({ ...prev, profile_image: result.file_path }));
        setFileUrl(result.file_path);
      } catch (error) {
        window.alert("Failed to upload file.");
        setIsError(true);
        setIsLoading(false);
      }
    }
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/20 z-50">
      <div className="flex items-center justify-center h-full">
        <div
          ref={middleRef}
          className={`w-full sm:w-3/5 tab:w-max p-3 tab:p-6 rounded-md bg-white border-2 border-gray-300  max-h-[90%] relative`}
        >
          <Heading2 align={`text-center font-poppins`} color={`text-accent`}>
            Change Profile Image
          </Heading2>
          <div className="w-max m-auto mt-4">
            {!isLoading && (
              <input
                type="file"
                accept=".jpeg,.jpg,.png,.svg"
                onChange={handleUpload}
                className="py-2 px-2"
              />
            )}
            {isLoading && (
              <Text font={`font-semibold font-poppins`} color={`accent`}>
                Uploading . . .
              </Text>
            )}
            {isError && (
              <Text font={`font-semibold font-poppins`} color={`accent`}>
                Something Wrong! Try Again Later.
              </Text>
            )}
          </div>
          {isSuccess && (
            <div className="bg-primary/20 p-2 rounded-md flex items-center justify-center gap-2">
              <BiCheck className="text-secondary text-xl font-bold" />
              <Text
                color={`secondary`}
                font={`font-semibold font-poppins`}
                align={`text-center`}
              >
                Changed Successfully
              </Text>
            </div>
          )}
          <div className="w-[120px] h-[120px] m-auto rounded-full border-4 border-secondary mt-4">
            <img
              src={user.profileImage}
              alt="profle image"
              className="w-full h-full rounded-full object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileChangeModal;
