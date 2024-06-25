// Handle dark mode
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeIcon.addEventListener('click', () => {
    // const body = document.body;  // Store body element
    const isDarkMode = darkModeIcon.classList.toggle('dark');  // Toggle 'dark' class

    if (isDarkMode) {
        darkModeIcon.src = "images/moon-6689.svg";
        body.classList.add('dark');
    } else {
        darkModeIcon.src = "images/sun-1846.svg";
        body.classList.remove('dark');
    }

    // Toggle dark mode for all relevant elements
    document.querySelectorAll('.box, .settings').forEach(element => {
        element.classList.toggle('dark', isDarkMode);
    });
});

// handle upload picture
const inputPic = document.getElementById('upload')
const picPlace = document.getElementById('img')
inputPic.addEventListener('change', () => {
    const file = inputPic.files[0]
    const reader = new FileReader()
    reader.onload = () => {
        picPlace.src = reader.result
    }
    reader.readAsDataURL(file)
})


// handle manipulating
let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let Sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hueRotate= document.getElementById("hue-rotate")
let canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')


let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})
// handle reset 
document.getElementById('reset').onclick = ()=>{
    img.style.filter = 'none'
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}



// handle download
let download = document.querySelector('#download')
download.onclick = function(){
    download.href = canvas.toDataURL()
}