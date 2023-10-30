let url = "https://restcountries.com/v3.1/all"


function reqListener() {
  let getData = JSON.parse(this.response);
  let getNamCapFlag = getData.forEach(element => {
      console.log(`Country Name : ${element.name.common}, Flag : ${element.flags.svg} , capital :${element.capital}`);
    
  })
  
  
}


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url);
req.send();
//