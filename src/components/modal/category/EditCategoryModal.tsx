import { Modal } from "antd";
import { useState } from "react";
import ImageUpload from "../../form/ImageUpload";
import { Edit } from "lucide-react";

const EditCategoryModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_image, setImage] = useState<File | null>(null);
  const [titleError, setTitleError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) {
      setTitleError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!title.trim()) {
      setTitleError("Category title is required");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      //onSubmit({ title, image });
      setIsSubmitting(false);
      // Optional: Reset form after submission
      // setTitle('');
      // setImage(null);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-600 hover:bg-green-700 p-2 text-white rounded-full"
      >
        <Edit size={18} />
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
      >
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Edit Category
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    className={`w-full px-4 py-2 border ${
                      titleError ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                    placeholder="Enter category title"
                  />
                  {titleError && (
                    <p className="mt-1 text-sm text-red-500">{titleError}</p>
                  )}
                </div>

                <div className="mb-6">
                  <ImageUpload
                    onChange={setImage}
                    title="Category Icon"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-lg text-white font-medium 
                  ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                  } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Create Category"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditCategoryModal;
