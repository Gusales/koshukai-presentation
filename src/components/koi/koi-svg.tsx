export function KoiSvg({ color }: { color: string }) {
  return (
    <svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo do koi */}
      <ellipse
        cx="40"
        cy="20"
        rx="30"
        ry="12"
        fill={color}
        opacity="0.7"
      />
      {/* Cauda */}
      <path
        d="M 10 20 Q 5 15, 0 20 Q 5 25, 10 20 Z"
        fill={color}
        opacity="0.6"
      />
      {/* Nadadeiras */}
      <ellipse
        cx="35"
        cy="25"
        rx="8"
        ry="4"
        fill={color}
        opacity="0.5"
        transform="rotate(-30 35 25)"
      />
      <ellipse
        cx="45"
        cy="25"
        rx="8"
        ry="4"
        fill={color}
        opacity="0.5"
        transform="rotate(30 45 25)"
      />
      {/* Cabeça */}
      <circle
        cx="65"
        cy="20"
        r="8"
        fill={color}
        opacity="0.8"
      />
      {/* Olho */}
      <circle
        cx="68"
        cy="19"
        r="2"
        fill="white"
      />
      <circle
        cx="69"
        cy="19"
        r="1"
        fill="black"
      />
    </svg>
  );
}