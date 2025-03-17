const getThumbnail = async (ytUrl: string) => {
  console.log("inside the getThumbnail: ", ytUrl);
  if (!ytUrl) {
    return {
      success: false,
      payload: "Invalid YouTube URL",
    };
  }
  let videoId = ytUrl.split("=").pop();

  if (!videoId) {
    return {
      success: false,
      payload: "Invalid YouTube URL",
    };
  }

  let thumbnail_url;
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
    );
    videoId = "";
    const data = await res.json();

    console.log("Thumbnail URL:", data.thumbnail_url);
    thumbnail_url = data.thumbnail_url as string;
  } catch (error) {
    console.error("Error fetching thumbnail:", error);
    return {
      success: false,
      payload: "Error fetching thumbnail",
    };
  }

  return {
    success: true,
    payload: thumbnail_url,
  };
};

export default getThumbnail;
