import React, { useState } from "react";
import axios from "axios";

const Upload = ({ onUploadStatus }) => {
  const [video, setVideo] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  const handleSubmit = (e) => {
    onUploadStatus(null); 
    e.preventDefault();
    if (!video) {
      // If no file is selected, you can handle it here
      setUploadStatus("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);

    axios
      .post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.status === "Success") {
          setUploadStatus("Upload successful");
          onUploadStatus("Upload successful");
          setTimeout(() => {
            setUploadStatus(null);
            setVideo(null);
          }, 5000); 
          // Clear the status after 5 seconds
        } else {
          setUploadStatus("File not uploaded");
          onUploadStatus(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setUploadStatus("Error uploading file");
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form className="py-4 px-9" onSubmit={handleSubmit}>
          <div className="mb-6 pt-4">
            <div className="mb-3 block text-l font-semibold text-red-700">
              {uploadStatus && <p>✔{uploadStatus}</p>}
            </div>
            <div className="mb-8">
              <input
                type="file"
                id="file"
                className="sr-only"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-indigo-300">
                    Drop video here
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-indigo-700">
                    Browse
                  </span>
                  {video && (
                    <p className="text-sm text-gray-700 mt-2">
                      Selected file: {video.name}
                    </p>
                  )}
                </div>
              </label>
            </div>
          </div>
          <div>
            <button
              className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
            >
              Send File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;