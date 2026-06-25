import { useState } from "react";
import { FaPlay, FaSpotify } from "react-icons/fa";
import "./styles/PlaylistWidget.css";

const playlists = [
  {
    id: 1,
    title: "susu🫶🏻",
    artist: "Playlist by Ryeuga",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da8463196b776a293c4098e5462e",
    url: "https://open.spotify.com/playlist/4HT5684dn7LYuCpyuOmgG0"
  },
  {
    id: 2,
    title: "jannik sinner",
    artist: "Playlist by Ryeuga",
    cover: "https://i.scdn.co/image/ab67616d00001e02187331e276c898d39764cc98",
    url: "https://open.spotify.com/playlist/05dr5EN3mWgv1qkt8MIk60"
  },
  {
    id: 3,
    title: "Mats son",
    artist: "Playlist by Ryeuga",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8421aab7f56e7f2a69df451235",
    url: "https://open.spotify.com/playlist/5Qo1ESavdZIHE1r0bPYAWp"
  }
];

const PlaylistWidget = () => {
  const [playingId, setPlayingId] = useState<number | null>(1);

  const handleItemClick = (id: number, url: string) => {
    setPlayingId(id);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass-card playlist-widget">
      <div className="playlist-header">
        <h3>
          <a href="https://open.spotify.com/user/31i6awnhhdnsv6zs7fbbd6b3k3x4" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaSpotify style={{ color: "#1DB954" }} /> Ryeuga's Playlists
          </a>
        </h3>
      </div>
      
      <div className="tracks-list">
        {playlists.map((playlist) => (
          <div 
            key={playlist.id} 
            className={`track-item ${playingId === playlist.id ? "playing" : ""}`}
            onClick={() => handleItemClick(playlist.id, playlist.url)}
          >
            <img src={playlist.cover} alt={playlist.title} className="track-art" />
            <div className="track-info">
              <p className="track-title">{playlist.title}</p>
              <p className="track-artist">{playlist.artist}</p>
            </div>
            
            <div className="track-status">
              {playingId === playlist.id ? (
                <div className="playing-bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              ) : (
                <button className="track-play-btn" aria-label="Play"><FaPlay /></button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistWidget;
