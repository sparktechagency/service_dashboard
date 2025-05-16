/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useRef } from "react"
import JoditEditor from "jodit-react"
import { Save, FileText, Upload } from "lucide-react"

const PrivacyPolicyPage = () =>{
  const editor = useRef(null)
  const [content, setContent] = useState<string>("")
  const [title, setTitle] = useState<string>("Privacy Policy")
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isPublished, setIsPublished] = useState<boolean>(false)

  const config = {
    readonly: false,
    height: 500,
    placeholder: "Start writing your privacy policy...",
    buttons: [
      "source",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "ul",
      "ol",
      "|",
      "font",
      "fontsize",
      "paragraph",
      "|",
      "table",
      "link",
      "|",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "fullsize",
    ],
    toolbarAdaptive: false,
  }

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      alert("Privacy policy saved successfully!")
    }, 1000)
  }

  const handlePublish = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsPublished(true)
      alert("Privacy policy published successfully!")
    }, 1000)
  }

  const privacyPolicyTemplate = `
<h2>1. Introduction</h2>
<p>This Privacy Policy explains how we collect, use, and disclose your information when you use our services.</p>

<h2>2. Information We Collect</h2>
<p>We may collect the following types of information:</p>
<ul>
  <li>Personal information such as name, email address, and contact details</li>
  <li>Usage data and analytics</li>
  <li>Device information</li>
</ul>

<h2>3. How We Use Your Information</h2>
<p>We use your information to:</p>
<ul>
  <li>Provide and maintain our services</li>
  <li>Improve and personalize your experience</li>
  <li>Communicate with you</li>
</ul>

<h2>4. Data Sharing and Disclosure</h2>
<p>We may share your information with:</p>
<ul>
  <li>Service providers</li>
  <li>Business partners</li>
  <li>Legal authorities when required by law</li>
</ul>
`

  const loadTemplate = () => {
    setContent(privacyPolicyTemplate)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <FileText className="mr-2" size={24} />
              Privacy Policy Creator
            </h1>
            <div className="flex space-x-2">
              <button
                onClick={loadTemplate}
                className="px-4 py-2 bg-white bg-opacity-20 rounded-md text-white text-sm font-medium hover:bg-opacity-30 transition-all flex items-center"
              >
                <FileText className="mr-1" size={16} /> Load Template
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Policy Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter policy title"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Policy Content</label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={(newContent) => setContent(newContent)}
              onChange={(_newContent) => {}}
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              {isPublished ? <span className="text-green-600 font-medium">Published</span> : <span>Draft</span>}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-200 transition-all flex items-center"
              >
                <Save className="mr-1" size={16} />
                {isSaving ? "Saving..." : "Save Draft"}
              </button>
              <button
                onClick={handlePublish}
                disabled={isSaving}
                className="px-4 py-2 bg-indigo-600 rounded-md text-white text-sm font-medium hover:bg-indigo-700 transition-all flex items-center"
              >
                <Upload className="mr-1" size={16} />
                {isSaving ? "Publishing..." : "Publish Policy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      {content && (
        <div className="w-full mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">Preview</h2>
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PrivacyPolicyPage;
