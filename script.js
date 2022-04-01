const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");

const allParts = [a,b,c,d,e,f];
const allKeys = ["c","v","b","n","m"," "];
const sounds = [new Audio("openhat.wav"),
new Audio("kick.wav"),
new Audio("snare.wav"),
new Audio("clap.wav"),
new Audio("ride.wav"),
new Audio("tom.wav")];

// DEFINING A FUNCTION TO SETUP MOUSEUP/DOWN EVENTS
const addListenerFuncMouse = (eventType,appliedChange) => {
    for (let i = 0; i < allParts.length; i++) {
        allParts[i].addEventListener(eventType, () => {
            allParts[i].style.border=appliedChange;
            if (appliedChange !== "none") {
                sounds[i].play();
}})}}

// RUNNING THE MOUSE FUNCTION TO SETUP THE MOUSE EVENTS
addListenerFuncMouse("mouseup","none");
addListenerFuncMouse("mousedown","blue solid 3px");

// SO THAT IF A USER CLICKS AND DRAGS OFF THE DRUM, IT STILL RELEASES
window.addEventListener("mouseup", () => {
    for (let i = 0; i < 6; i++) {
        allParts[i].style.border="none";
    }})

// DEFINING A FUNCTION TO SETUP NEEDED KEYPRESS EVENTS - WIP
const addListnerFuncKey = (eventType,appliedChange) => {
    window.addEventListener(eventType, (event) => {
        for (let i = 0; i < allKeys.length; i++) {
            if (event.key === allKeys[i]) {
            allParts[i].style.border=appliedChange;
            if (appliedChange !== "none") {
                sounds[i].play();
        }}}})}

// RUNNING THE KEYS FUNCTION TO SETUP THE KEY EVENTS
addListnerFuncKey("keydown","red solid 3px");
addListnerFuncKey("keyup","none");