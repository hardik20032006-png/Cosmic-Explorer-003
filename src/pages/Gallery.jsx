
import { useEffect, useState } from "react";

const CLOUD_NAME = "hxmlwdvg";

const FOLDERS = {
  pc: "cosmic-wallpapers/pc-wallpaper",
  mobile: "cosmic-wallpapers/phone-wallpaper",
};

export default function Gallery() {
  const [device, setDevice] = useState("pc");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadImages() {
      setLoading(true);
      setError("");
      setImages([]);

      try {
        // Cloudinary's public delivery URLs don't provide a folder listing.
        // We'll connect this page to a secure listing endpoint next.
        const response = await fetch(
          `/api/gallery?folder=${encodeURIComponent(FOLDERS[device])}`
        );

        if (!response.ok) {
          throw new Error("Gallery image service is not connected yet.");
        }

        const data = await response.json();

        if (!cancelled) {
          setImages(Array.isArray(data.images) ? data.images : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err.message || "Couldn't load images. Please try again."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [device]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setExpandedImage(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function downloadImage(image) {
    const link = document.createElement("a");
    link.href = image.downloadUrl || image.url;
    link.download = image.filename || "cosmic-wallpaper.jpg";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <main className="min-h-full bg-[#171717] px-4 pt-5 pb-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-7">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Galaxy &amp; Wallpaper
          </h1>
          <p className="mt-1 text-slate-400">
            Bring the universe to your screen.
          </p>
        </header>

        <div className="mb-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setExpandedImage(null);
              setDevice("pc");
            }}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              device === "pc"
                ? "bg-purple-600 text-white"
                : "border border-slate-700 bg-[#101b2d] text-slate-300 hover:border-purple-500"
            }`}
          >
            🖥️ PC Wallpapers
          </button>

          <button
            type="button"
            onClick={() => {
              setExpandedImage(null);
              setDevice("mobile");
            }}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              device === "mobile"
                ? "bg-purple-600 text-white"
                : "border border-slate-700 bg-[#101b2d] text-slate-300 hover:border-purple-500"
            }`}
          >
            📱 Mobile Wallpapers
          </button>
        </div>

        {loading && (
          <p className="py-12 text-center text-slate-400">
            Loading cosmic images...
          </p>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-amber-200">
            <p className="font-semibold">Gallery connection needed</p>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && images.length === 0 && (
          <p className="py-12 text-center text-slate-400">
            No images found in this collection yet.
          </p>
        )}

        {!loading && !error && images.length > 0 && (
          <div
            className={`grid gap-5 ${
              device === "pc"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {images.map((image) => (
              <article
                key={image.id || image.url}
                className="overflow-hidden rounded-2xl border border-purple-500/30 bg-[#101b2d] p-3"
              >
                <button
                  type="button"
                  onClick={() => setExpandedImage(image)}
                  className="block w-full cursor-zoom-in overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label={`Expand ${image.filename || "wallpaper"}`}
                >
                  <img
                    src={image.url}
                    alt={image.filename || "Cosmic wallpaper"}
                    loading="lazy"
                    className={`w-full object-cover transition duration-300 hover:scale-[1.02] ${
                      device === "pc" ? "aspect-video" : "aspect-[9/16]"
                    }`}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => downloadImage(image)}
                  className="mt-3 w-full rounded-xl bg-purple-600 px-4 py-3 font-semibold transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  ↓ Download Image
                </button>
              </article>
            ))}
          </div>
        )}
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setExpandedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded wallpaper"
        >
          <button
            type="button"
            onClick={() => setExpandedImage(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 px-4 py-2 text-2xl hover:bg-white/20"
            aria-label="Close expanded image"
          >
            ×
          </button>

          <div
            className="flex max-h-full max-w-full flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={expandedImage.url}
              alt={expandedImage.filename || "Cosmic wallpaper"}
              className="max-h-[82vh] max-w-[92vw] object-contain"
            />

            <button
              type="button"
              onClick={() => downloadImage(expandedImage)}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
            >
              ↓ Download Full Image
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
