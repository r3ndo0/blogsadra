export default function slugify(text) {
  return text.toLowerCase().replace(/ +/g, "-");
}
