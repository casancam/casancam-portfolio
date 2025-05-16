"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react'; // Import useRef if needed for scrolling

// Assuming your CV is in the public folder at /cv/your-cv-name.pdf
const CV_PATH = "/cv.pdf"; // **IMPORTANT: Update this path to your actual CV file**

const CvDownloadPage = () => {
   const pageRef = useRef(null); // Ref for the main page container if needed

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-20 overflow-x-hidden">
      {/* This div is for spacing below the navbar - adjust pt-24 as needed */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600" // Different gradient
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resume / CV
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            View and download my professional resume.
          </motion.p>
        </div>

        {/* CV Viewer and Download */}
        <motion.div
           className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Interactive Viewer</h2>

            {/* PDF Embed - Using iframe */}
            {/* This method relies on the browser's or system's PDF viewer.
                It might not be consistent across all browsers/devices.
                For more control and consistency, consider a library like react-pdf.
            */}
            <div className="w-full h-[70vh] mb-6 rounded-lg overflow-hidden border border-gray-700">
                 <iframe
                    src={`${CV_PATH}#toolbar=0&navpanes=0&scrollbar=0`} // Append options to hide toolbar/nav (browser support varies)
                    className="w-full h-full"
                    title="My Resume PDF Viewer"
                    style={{ border: 'none' }}
                 >
                    {/* Fallback content if iframe is not supported */}
                    Your browser does not support iframes. Please use the download button below.
                 </iframe>
            </div>

            {/* Note about viewer consistency */}
             <p className="text-sm text-gray-400 text-center mb-6">
                 Note: The appearance of the viewer may vary depending on your browser and device.
             </p>


            {/* Download Button */}
            <div className="text-center">
                <a
                    href={CV_PATH}
                    download
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
                >
                    Download Resume (PDF)
                </a>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CvDownloadPage;