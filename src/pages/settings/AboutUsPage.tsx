"use client"

import { FileText } from "lucide-react"
import CreateAboutForm from "../../components/AboutUs/CreateAboutForm"

const AboutUsPage = () =>{



  // const loadTemplate = () => {
  //   setContent(privacyPolicyTemplate)
  // }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <FileText className="mr-2" size={24} />
              About Us
            </h1>
            <div className="flex space-x-2">
              <button
                // onClick={loadTemplate}
                className="px-4 py-2 bg-white bg-opacity-20 rounded-md text-white text-sm font-medium hover:bg-opacity-30 transition-all flex items-center"
              >
                <FileText className="mr-1" size={16} /> Load Template
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <CreateAboutForm/>
        </div>
      </div>

      {/* Preview Section */}
      {/* {content && (
        <div className="w-full mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">Preview</h2>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default AboutUsPage;
