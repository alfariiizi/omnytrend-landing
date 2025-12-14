const OmniTrend = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M20.194 7.745c.235-.408.817-.408 1.014.02.589 1.282.917 2.709.917 4.212 0 5.579-4.523 10.101-10.101 10.101-2.52 0-4.825-.922-6.594-2.448a.59.59 0 0 1-.117-.745l4.664-8.079a.05.05 0 0 1 .093.021l.643 7.85c.025.31.201.587.47.742l.883.51a.947.947 0 0 0 1.294-.347z"
    />
    <path
      fill="url(#b)"
      d="M12.023 1.875c2.406 0 4.616.841 6.35 2.245a.59.59 0 0 1 .132.757l-5.56 9.628a.065.065 0 0 1-.12-.027l-.605-7.802a.95.95 0 0 0-.471-.747l-.911-.526a.947.947 0 0 0-1.294.347L3.702 15.869c-.24.416-.836.404-1.02-.04a10.1 10.1 0 0 1-.76-3.852c0-5.58 4.523-10.102 10.101-10.102"
    />
    <defs>
      <linearGradient
        id="a"
        x1={21.646}
        x2={9.226}
        y1={8.042}
        y2={29.405}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0073D4" />
        <stop offset={0.3} stopColor="#1D9EFF" />
        <stop offset={0.7} stopColor="#995CFF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={18.281}
        x2={6.15}
        y1={3.059}
        y2={24.071}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E7BE" />
        <stop offset={0.587} stopColor="#1D9EFF" />
        <stop offset={1} stopColor="#0073D4" />
      </linearGradient>
    </defs>
  </svg>
);
export default OmniTrend;
