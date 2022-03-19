function checkSpam(str) {
  
  if ( str.indexOf("1XbeT") != -1 || str.indexOf("xxxxx") != -1 )  {
    return true;
  } else {
    return false;
  }
  
  return str;
}

checkSpam("now")