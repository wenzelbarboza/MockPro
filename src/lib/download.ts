import { toPng } from "html-to-image";

export const handleDownload = async (domId: string) => {
  const element = document.getElementById(domId);
  if (!element) return;

  try {
    // Use html-to-image for better handling of CSS properties
    const dataUrl = await toPng(element);

    // Download the image
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "instaCanvas.png";
    link.click();
  } catch (error) {
    console.error("Error downloading canvas:", error);
  }
};
