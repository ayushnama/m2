const paths = {
  search: "M21 21l-4.3-4.3M11 18a7 7 0 100-14 7 7 0 000 14z",
  heart: "M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z",
  cart: "M6 7h12l1 13H5L6 7zM9 7a3 3 0 016 0",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  down: "M6 9l6 6 6-6",
};

export default function Icon({ name, className = "h-5 w-5", fill = "none" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill} stroke="currentColor" strokeWidth="1.5">
      <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
