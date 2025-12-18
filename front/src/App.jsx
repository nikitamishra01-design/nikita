
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [liked, setLiked] = useState(false);

  return (
    <main className="app">
      <div className="card">
        <img
          className="card-img"
          src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d2f5b3b9c9f3f34a9ad5a8d3a4a2d9f"
          alt="sample"
        />
        <div className="card-body">
          <h2 className="card-title">Beautiful Scenery</h2>
          <p className="card-text">
            This is a small React + CSS card. Click the heart button to like the
            card and see the animation.
          </p>

          <div className="card-footer">
            <button
              className={`btn-like ${liked ? "liked" : ""}`}
              onClick={() => setLiked((s) => !s)}
              aria-pressed={liked}
            >
              {liked ? "♥ Liked" : "♡ Like"}
            </button>

            <button
              className="btn-outline"
              onClick={() => alert("More details coming soon!")}
            >
              Details
            </button>
          </div>
        </div>
      </div>

      <footer className="credits">Made with ❤️ by Nikita</footer>
    </main>
  );
}
