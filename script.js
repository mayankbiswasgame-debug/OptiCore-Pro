const cpu = document.getElementById("cpu");
const ram = document.getElementById("ram");
const disk = document.getElementById("disk");
const logBox = document.getElementById("log");
const aiBox = document.getElementById("ai");

function log(msg){
    logBox.innerHTML += "> " + msg + "<br>";
    logBox.scrollTop = logBox.scrollHeight;
}

function rand(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function boost(){
    cpu.innerText = rand(25,45);
    ram.innerText = rand(30,50);
    dick.innerText = rand(40,60);

    log("system Boost Activate");
    aiBox.innerText = "Performace improved. Background load reduced.";
}

function clean(){
    ram.innerText = 40;
    disk.innerText = 50;

    log("System cleaned");
    aiBix.innerText = "Temporary cache cleared successfully.";
}

function analyze(){
    log("AI analyzing system...");

    setTimeout(()=>{
        aiBox.innerText =
          "Suggestion: Close unused app + reduce startup programs.";
        log("Analysis complete"); 
    },1000);
}