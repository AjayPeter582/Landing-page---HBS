let imageindex=0;

const images=[
    {type:"image",src:"image1.jpg"},
    {type:"image",src:"image2.jpg"},
    {type:"video",src:"video1.mp4"}
]

const sliderImageEl=document.getElementById("slider-image");
const prevBtnEl=document.getElementsByClassName("prev-button");
const nextBtnEl=document.getElementsByClassName("next-button");
const mediaContainerEl=document.getElementsByClassName("media-container")[0];
console.log(mediaContainerEl)

function buttonclicked(source){
    console.log("Button clicked")
    console.log(imageindex)
    imageindex=(imageindex+(source===0?-1:1)+images.length)%images.length;
    updateImage();
}
function updateImage() {
    mediaContainerEl.innerHTML = "";
    const media = images[imageindex];

    // Create new media element
    const newMedia = document.createElement(media.type === "image" ? "img" : "video");
    newMedia.id = "slider-image";
    newMedia.src = `Images/${media.src}`;
    newMedia.style.opacity = "0";
    newMedia.style.transform = "translateX(-100%)"; // Start off-screen

    if (media.type === "video") {
        newMedia.controls = false;
        newMedia.autoplay = true;
    }

    mediaContainerEl.appendChild(newMedia);

    // Trigger transition after element is added
    setTimeout(() => {
        newMedia.style.opacity = "1";
        newMedia.style.transform = "translateX(0%)";
    }, 50); // Small delay to allow transition
}





updateImage();