import { useEffect, useRef, useState } from "react";

const FRAME_POSITIONS = [
  { top: "16px", left: "8px" },
  { top: "0px", right: "12px" },
  { bottom: "10px", left: "14px" },
  { bottom: "0%", right: "12px" },
  { top: "10%", left: "50%", x: "-50%" },
  { bottom: "10%", right: "12px", x: "-50%" },
];

export default function TaskCluster({ title, videos, path = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [frames, setFrames] = useState([]);
  const mainRef = useRef(null);

  // Play main video
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.load();
      mainRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  // Generate 4–6 safe frames from active video
  useEffect(() => {
    const video = document.createElement("video");
    video.src = `${path}/${videos[activeIndex]}`;

    video.onloadedmetadata = () => {
      const duration = video.duration;
      const frameCount = Math.floor(Math.random() * 3) + 4; // 4–6

      const min = duration > 8 ? 4 : Math.max(0, duration * 0.3);
      const max = duration > 8 ? 8 : Math.max(duration - 0.5, min);

      const nextFrames = Array.from({ length: frameCount }).map(() => {
        const t = duration > 1 ? Math.random() * (max - min) + min : 0;

        return `${path}/${videos[activeIndex]}#t=${t.toFixed(2)}`;
      });

      setFrames(nextFrames);
    };
  }, [activeIndex, videos, path]);

  const handleEnded = () => {
    setActiveIndex((i) => (i + 1) % videos.length);
  };

  return (
    <div className='w-[260px]'>
      <div className='relative h-[180px] overflow-hidden rounded-xl'>
        {/* Background frames */}
        {frames.map((src, i) => {
          const pos = FRAME_POSITIONS[i];

          return (
            <video
              key={i}
              src={src}
              muted
              className='absolute w-[96px] rounded-lg opacity-30 blur-[0.5px]'
              style={{
                top: pos.top,
                bottom: pos.bottom,
                left: pos.left,
                right: pos.right,
                transform: pos.x ? `translateX(${pos.x})` : undefined,
              }}
            />
          );
        })}

        {/* Main video */}
        <video
          ref={mainRef}
          src={`${path}/${videos[activeIndex]}`}
          onEnded={handleEnded}
          className='
            relative z-10 mx-auto mt-10
            w-[160px] h-[90px]
            rounded-lg
            animate-fadeIn
          '
        />
      </div>

      <div className='mt-2 text-center text-sm opacity-80'>{title}</div>
    </div>
  );
}
