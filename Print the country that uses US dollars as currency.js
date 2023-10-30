let url = "https://restcountries.com/v3.1/all"


function reqListener() {
  let getData = JSON.parse(this.response);
  let getUsdCoy = getData.filter((dataElement)=>{
    return dataElement.currencies && Object.keys(dataElement.currencies).includes("USD");
  })
  let getCountryNameofUsd = getUsdCoy.map(value=>value.name.common);
  console.log(getCountryNameofUsd);
}


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url);
req.send();

// The error is likely occurring because item.currencies is undefined or null for some items in your obj array.
//To avoid this error, you should add a check to ensure that item.currencies is defined before trying to access its keys. Here's an updated version of the code:
//This code includes a check item.currencies && before trying to access the keys. This way, it ensures that item.currencies is defined before attempting to retrieve its keys.
//This should prevent the "Cannot convert undefined or null to object" error from occurring.