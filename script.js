let scene = 0;

// Elements
const IMAGE = document.getElementById("image"); 
const CAPTION = document.getElementById("caption");
const ADVANCE = document.getElementById("advance");
const ENDMESSAGE = document.getElementById("endMessage");

// Image Data
const IMAGES = ["images/forest1.jpg", "images/forest2.jpg", "images/forest3.jpg"];

// Caption Data
const CAPTIONS = ["You stand at the entrance to the forest. The light is warm. The path ahead is clear. Dr. Ralls is waiting.",
                  "You move deeper in. The trees close around you. The light grows thin. Jamie encourages you to seek the One Piece.",
                  "You have reached the heart of the forest. It is very quiet here. Jiya sees a treasure in the center of the grove."]

function advanceScene() {
    if (scene < 2) {
        scene++
    } else if (scene == 2) {
        showEndMessage();
        ADVANCE.disabled = true;
    }
    IMAGE.src = IMAGES[scene];
    CAPTION.innerText = CAPTIONS[scene];
}

function showEndMessage() {
    ENDMESSAGE.innerText = "There is nowhere left to go. You sit down among the roots and listen to Genesis' story.";
    ENDMESSAGE.classList.remove("hidden");    
}

ADVANCE.addEventListener("click", advanceScene)

IMAGE.src = IMAGES[scene];
CAPTION.innerText = CAPTIONS[scene];