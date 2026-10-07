// Llama propia (SVG), usada en el logo.
export default function Flame({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path
        d="M33 8c2 9-8 13-8 23 0 4 2 7 5 8-3-6 2-10 5-14 1 5 7 8 7 15 0 8-6 13-12 13s-13-5-13-14c0-9 6-13 9-19 3-3 5-7 7-12z"
        fill="#E8731A"
      />
      <path d="M32 30c1 5-5 8-5 14 0 4 2 6 5 6s6-2 6-6c0-4-4-7-6-14z" fill="#F2A03D" />
    </svg>
  );
}
