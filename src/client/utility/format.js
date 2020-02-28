export default function format1(n) {
  return n.toFixed(2).replace(/./g, (c, i, a) => (i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? `,${c}` : c));
}
