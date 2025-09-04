import { useRef, useEffect } from "react";
import "./MaskedHero.css";

export default function MaskedHero() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      if (stickyMask.current) {
        const size = (initialMaskSize + maskSizeProgress) * 100 + "%";
        stickyMask.current.style.webkitMaskSize = size;
        stickyMask.current.style.maskSize = size;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const getScrollProgress = () => {
    if (!container.current) return 0;

    const rect = container.current.getBoundingClientRect();
    const scrollProgress =
      (window.scrollY - container.current.offsetTop) /
      (container.current.scrollHeight - window.innerHeight);

    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    // return Math.min(Math.max(easedScrollProgress, 0), 1);
    return easedScrollProgress;
  };

  return (
    <section className="maskedHero">
      <div ref={container} className="container">
        <div ref={stickyMask} className="stickyMask">
          <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
