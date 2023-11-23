import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowClockwise } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import resumeSrc from "../../assets/Resume.pdf";
import { useTranslation } from "react-i18next";
import axios from "axios";
import useCommonToast from "../hooks/useCommonToast";

const DownloadButton = () => {
  const [t] = useTranslation("global");
  const { successToast, errorToast } = useCommonToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (filePath: string, fileName = "Resume.pdf") => {
    try {
      setIsDownloading(true);

      const response = await axios.get(`${filePath}`, {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      const blob = new Blob([response.data], { type: "application/pdf" });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      link?.parentNode?.removeChild(link);
      successToast(t("work.toast.success"));
    } catch (e) {
      console.error(e);
      errorToast(t("work.toast.error"));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.button
      className="md:absolute md:top-2 md:right-2 m-4 p-4 bg-gradient-to-br from-technologies-tailwindcss/100 to-technologies-chakraui rounded-3xl uppercase text-secondary transition-colors hover:text-accent-1"
      onClick={() => handleDownload(resumeSrc)}
      initial={false}
      animate={{ scale: isDownloading ? 1.1 : 1 }}
      whileHover={{ scale: 1.1 }}
      disabled={isDownloading}
      draggable="false"
    >
      <div className="flex items-center gap-2">
        {isDownloading ? (
          <>
            <BsArrowClockwise size={25} className="animate-spin" />
            <span>{t("work.buttons.download-CV.downloading")}</span>
          </>
        ) : (
          <>
            <AiOutlineCloudDownload size={25} className="animate-bounce" />
            <span>{t("work.buttons.download-CV.download")}</span>
          </>
        )}
      </div>
    </motion.button>
  );
};

export default DownloadButton;
