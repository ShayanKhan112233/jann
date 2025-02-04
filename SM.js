function weather() {
    let cityName = document.querySelector(".city").value;
    let result1 = document.querySelector(".result");

    if (!cityName) {
        result1.innerHTML = "Please enter a city name.";
        return;
    }

    result1.innerHTML = "Fetching weather data..."; // Show loading message

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=42c9534dbe304745166857d57e0c578d&units=metric`)
        .then(function (response) {
            const { temp , humidity , pressure } = response.data.main;
            const {description} = response.data.weather[0];
            result1.innerHTML = `Current Weather ${cityName} is <br> <span id="ss"> ${temp}°C </span>`;
        })
        .catch(function (error) {
            if (error.response && error.response.data.message) {
                result1.innerHTML = `Error: ${error.response.data.message}`; // Display error message from the API
            } else {
                result1.innerHTML = `Unable to fetch weather. Please try again later.`;
            }
            console.log(error);
        });
}
//Date And Time
function settime1(){
    let time=new Date();
    let hour =time.getHours();
    if(hour>12){
    document.getElementById("time").innerHTML="PM";
    }
    else{
      document.getElementById("time").innerHTML="AM";
    }
    let second=time.getSeconds();
    if(second<10){
      second="0"+second;
    }
    let minute=time.getMinutes();
    if(minute<10){
      minute="0"+minute;}
      let hour1=time.getHours();
      if(hour1>12){
        hour1=hour1-12;}
        if(hour1==0){
          hour1=12;
        }
        if(hour1<10){
          hour1="0"+hour1;
        }
    let a=document.getElementById("clock").innerHTML=hour1+":"+minute+":"+second;
    let date=time.getDate()
    let year=time.getFullYear();
    let mont = time.toLocaleString('default', { month: 'short' }); 
    document.getElementById("date").innerHTML = date+"  "+ mont+" "+year;}
    setInterval(settime1,1000)