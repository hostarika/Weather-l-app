
const apiKey="0837213505e842f3a3b0490b885afd02";
const btn =document.getElementById("btn")
const input =document.getElementById("input")
const temp =document.getElementById("temp")
const min =document.getElementById("min")
const max =document.getElementById("max")
const img =document.getElementById("img")
const city =document.getElementById("city")
const date =document.getElementById("date")
const units = `metric`

btn.addEventListener("click",()=>{

    if(input.value.trim().length<1){
        alert("Biror shahar yozing")
    }else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}`;
        fetch(url)
        .then(res=> res.json())
        .then(json=> weatherView(json)  ) 
    }

})


function weatherView(data) {
    console.log(data)
    temp.textContent=data.main.temp.toFixed(0)+"°";
    city.textContent=data.name;
    max.textContent="Max:"+data.main.temp_max.toFixed(0)+"°";
    min.textContent="Min:"+data.main.temp_min.toFixed(0)+"°";
    
    img.src=`./img/${data.weather[0].main}.png`
}

let presentTime=new Date();
let soat=presentTime.getHours();
let minut=presentTime.getMinutes();
let sekund=presentTime.getSeconds();
let sana =presentTime.getDate();
let nechanchioy =presentTime.getMonth();

let oy;

if (nechanchioy==0) {
    oy="January"
} 
else if(nechanchioy==1){
    oy="February"
}
else if(nechanchioy==2){
    oy="March"
}
else if(nechanchioy==3){
    oy="April"
}
else if(nechanchioy==4){
    oy="May"
}
else if(nechanchioy==5){
    oy="June"
}
else if(nechanchioy==6){
    oy="July"
}
else if(nechanchioy==7){
    oy="August"
}
else if(nechanchioy==8){
    oy ="September"
}
else if(nechanchioy==9){
    oy="October"
}
else if(nechanchioy==10){
    oy="November"
}
else if(nechanchioy==11){
    oy="December"
}
console.log(nechanchioy)
console.log(oy)
date.textContent=oy+","+sana