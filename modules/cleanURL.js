export default function CleanURL(url) {
  return url
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\s/g, "-");
}
