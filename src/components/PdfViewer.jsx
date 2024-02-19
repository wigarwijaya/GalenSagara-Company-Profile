import React from "react";
import { useTranslation } from "react-i18next";

function PDFViewer(props) {
  const { pdf } = props;
  const { t } = useTranslation("common");
  return (
    <div className="container flex justify-center items-center">
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="w-64 h-10 text-black hover:text-white hover:bg-black border-2 border-black py-2 px-8 focus:outline-1 rounded text-sm text-center">
        {/* Download PDF file. */}
        {t("download")} PDF file
        </a>
    </div>
  );
}

export default PDFViewer;
