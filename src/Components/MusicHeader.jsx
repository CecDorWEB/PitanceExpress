import { useState, useRef, useEffect } from "react";
import "../styles/music.css";
import music from "../assets/music.mp3";
import play from "../assets/play.png";
import pause from "../assets/pause.png";
import mute from "../assets/mute.png";
import unmute from "../assets/unmute.png";

function MusicHeader() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current.volume = 0.1;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="Music">
      <audio ref={audioRef} className="audioMusic" autoPlay>
        <source src={music} type="audio/mp3" />
        <track kind="captions" srcLang="fr" label="French" />
        Votre navigateur ne prend pas en charge l&apos;élément audio.
      </audio>
      <div>
        <button type="button" onClick={togglePlay} className="btn">
          {isPlaying ? (
            <img src={pause} alt="Pause" className="icon" />
          ) : (
            <img src={play} alt="Play" className="icon" />
          )}
        </button>
        <button type="button" onClick={toggleMute} className="btn">
          {isMuted ? (
            <img src={unmute} alt="Unmute" className="icon" />
          ) : (
            <img src={mute} alt="Mute" className="icon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default MusicHeader;
