let url = "https://restcountries.com/v3.1/all"


function reqListener() {
  let getData = JSON.parse(this.response);
  let getTotalpop = getData.reduce((accuData, elementData)=>{
    return accuData + elementData.population;
  },0) 
  console.log(getTotalpop);
}


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url);
req.send();
//