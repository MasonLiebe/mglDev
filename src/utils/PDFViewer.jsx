import { Viewer, Worker } from "@react-pdf-viewer/core"; // Import components from react-pdf-viewer
import React, { useState } from "react"; // Import React and useState
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // Import the defaultLayoutPlugin
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import styles for react-pdf-viewer
import "@react-pdf-viewer/default-layout/lib/styles/index.css"; // Import styles for default layout
import { FaRegFilePdf } from "react-icons/fa6"; // Import the FaRegFilePdf icon from react-icons
import { BiHide } from "react-icons/bi";

// Settings to display the pdf file from sanity.io on the ProjectDetails page
const PDFViewer = ({ pdf }) => {
  const [show, setShow] = useState(false); // Define a state variable to control whether to show the PDF or not

  const newplugin = defaultLayoutPlugin(); // Create a new instance of the defaultLayoutPlugin

  return (
    <div>
      <button
        onClick={() => setShow(!show)} // Toggle the 'show' state when the button is clicked
        className="flex items-center gap-2 hover:underline mb-5 text-[17px] font-medium"
      >
        {!show ? <FaRegFilePdf size={20} /> : <BiHide size={20} />}
        {show ? "Hide" : "View PDF"}
      </button>

      {show && (
        <div className="w-full h-[calc(100vh-96px)] overflow-y-auto flex items-center justify-center">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            {/* Display the PDF using Viewer component if 'show' is true */}
            {pdf && <Viewer fileUrl={pdf} plugins={[newplugin]} />}
          </Worker>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
