function truncate(str, maxlength) {
  let text;
  
  if (str.length >= maxlength) {
    text = str.slice(0, maxlength-1) + "…";
    return text;
  } else {
    return str;
  }
  
}
