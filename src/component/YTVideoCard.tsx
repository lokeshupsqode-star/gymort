import { useState } from "react";

const YTVideoCard: React.FC = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="youtubevideo-player">
      {!playVideo ? (
        <>
          <img
            className="cover"
            src="/images/youtube/trendImg.jpg"
            alt="Workout Video"
          />

          <button className="play-btn" onClick={() => setPlayVideo(true)}>
            <img
              className="yt-play-button"
              src="/images/youtube/Button-YT.svg"
              alt="Play Button"
            />
          </button>
        </>
      ) : (
        <iframe
          className="youtube-iframe"
          src="https://www.youtube.com/embed/7Nwn2nLBqEU?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YTVideoCard;
