let url = decodeURI(window.location.href);
console.log(url);
let urlParts = url.split("?");
console.log(urlParts[1]);
let dataPairs = urlParts[1].split("&");

for (var i = 0; i < dataPairs.length; i++) {
  console.log(dataPairs[i]);
  let keyPair = dataPairs[i].split("=");
  console.log("input" + keyPair[0]);
  keyPair[1] = keyPair[1].replace(/[+]/g," ");
  document.getElementById("input" + keyPair[0]).textContent += " " + keyPair[1];
}
