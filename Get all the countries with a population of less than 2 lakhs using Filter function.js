let url = "https://restcountries.com/v3.1/all"


function reqListener() {
  let getData = JSON.parse(this.response);
    let getPop = getData.filter(value=>value.population < 200000);
    let getCoyPop = getPop.map(value=>value.name.common);
  console.log(getCoyPop);
  
}


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url);
req.send();
