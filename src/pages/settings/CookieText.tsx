"use client";

import { FileText } from "lucide-react";
import type { ReactNode } from "react";
import PolicyLoading from "../../components/loader/PolicyLoading";
import { useGetCookieTextQuery } from "../../redux/features/policy/policyApi";
import UpdateCookieForm from "../../components/AboutUs/UpdateCookieForm";
import CreateCookieForm from "../../components/AboutUs/CreateCookieForm";

const CookieText = () => {
  const { data, isLoading, isSuccess, error } =
    useGetCookieTextQuery(undefined);
  const cookie = data?.data;

  let content: ReactNode;

  if (isLoading) {
    return <PolicyLoading />;
  }
  if (!isLoading && error && !cookie?._id) {
    content = <CreateCookieForm />;
  }

  if (!isLoading && isSuccess && cookie?._id) {
    content = <UpdateCookieForm description={cookie?.description} />;
  }
  console.log("=========", cookie);
  return (
    <div className="min-h-full bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <FileText className="mr-2" size={24} />
              Cookie Banner
            </h1>
          </div>
        </div>
        <div className="p-6">{content}</div>
      </div>
    </div>
  );
};

export default CookieText;
