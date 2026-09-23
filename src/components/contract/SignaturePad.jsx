import { useEffect, useRef } from "react";
import SignaturePadLib from "signature_pad";

// Thin wrapper around signature_pad: sizes the canvas for the device pixel
// ratio (so signatures stay crisp on retina screens) and reports the drawn
// PNG data URL back to the parent whenever the stroke set changes.
export default function SignaturePad({ onChange }) {
  const canvasRef = useRef(null);
  const padRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    function resizeCanvas() {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      const { offsetWidth, offsetHeight } = canvas;
      canvas.width = offsetWidth * ratio;
      canvas.height = offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      padRef.current?.clear();
    }

    padRef.current = new SignaturePadLib(canvas, {
      backgroundColor: "#ffffff",
      penColor: "#111827",
    });
    padRef.current.addEventListener("endStroke", () => {
      onChange(padRef.current.isEmpty() ? null : padRef.current.toDataURL("image/png"));
    });

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      padRef.current?.off();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClear() {
    padRef.current?.clear();
    onChange(null);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="w-full h-48 rounded-lg border-2 border-dashed border-gray-300 touch-none bg-white"
      />
      <button
        type="button"
        onClick={handleClear}
        className="mt-2 text-sm text-gray-600 underline hover:text-blue-600"
      >
        Tozalash
      </button>
    </div>
  );
}
