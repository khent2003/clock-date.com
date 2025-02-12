function updateClock() {
    const now = new Date();
    
 
    const options = { timeZone: "Asia/Manila", hour12: true }; 
    const timeInPHT = now.toLocaleString("en-US", options);

   
    const hours = new Date(timeInPHT).getHours();
    const minutes = new Date(timeInPHT).getMinutes();
    const seconds = new Date(timeInPHT).getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';  


    const hour12 = hours % 12 || 12; 

   
    document.getElementById("hours").innerText = String(hour12).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    
    document.getElementById("hours").innerText += ` ${ampm}`;

   
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById("date").innerText = currentDate;
}


setInterval(updateClock, 1000);


updateClock();


document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    
    const red = Math.floor((mouseX / window.innerWidth) * 255);
    const blue = Math.floor((mouseY / window.innerHeight) * 255);
    const green = 255 - red;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
