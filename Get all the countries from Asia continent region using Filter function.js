let url = "https://restcountries.com/v3.1/all"


function reqListener() {
  let getData = JSON.parse(this.response);
    let getAsia = getData.filter(value=>value.continents[0]==="Asia");
  let getCountryName = getAsia.map(value=>value.name.common)
    //console.log(getAsia);
  console.log(getCountryName);
}


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url);
req.send();
//