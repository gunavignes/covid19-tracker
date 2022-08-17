var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Enter country name...");


var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",tracker);

let active=document.createElement("div");
active.setAttribute("id","active");

let recovered=document.createElement("div")
recovered.setAttribute("id","recovered");

let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");



div.append(input,button,active,recovered,deaths);
document.body.append(div);

async function tracker()
{
    let res=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${res}`;

    let result=await fetch(url);
    let result1=await result.json();
    var index=result1.length-1;
    console.log(result1[index].Active);
    active.innerHTML=`Total active cases:${result1[index].Active}`;
    console.log(result1[index].Recovered);
    recovered.innerHTML=`Total recovered cases:${result1[index].Recovered}`;
    console.log(result1[index].Deaths);
    deaths.innerHTML=`Total Death cases:${result1[index].Deaths}`;
}