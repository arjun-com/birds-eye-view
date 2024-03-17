const modal = document.getElementById("bird-modal")
var modalVisibile = false

const birds = [
    {
        "name": "White Browed Wagtail",
        "img": "./bird_images/White_Browed_Wagtail-removebg-preview.png",
        "thumbnail": "./bird_images/White Browed Wagtail.jpg",
        "sound": "./bird_sounds/White Browed Wagtail.mp3",
        "desc": "The white-browed wagtail is the largest member of the wagtail family. The native name of khanjan is used in the phrase \"khanjan-eyed\" to describe someone with beautiful eyes.",
        "top": "180px",
        "left": "950px"
    },
    {
        "name": "Spotted Owlet",
        "img": "./bird_images/spotted_owlet-removebg-preview.png",
        "thumbnail": "./bird_images/spotted owlet.jpg",
        "sound": "./bird_sounds/Spotted Owlet.mp3",
        "desc": "Although primarily nocturnal, this bird species is frequently observed during daylight hours. Their loud calls, which make them quite familiar to humans, have led to associations with negative omens.",
        "top": "150px",
        "left": "700px"
    },
    {
        "name": "White Cheeked Barbet",
        "img": "./bird_images/White_Cheeked_Barbet-removebg-preview.png",
        "thumbnail": "./bird_images/White Cheeked Barbet.jpg",
        "sound": "./bird_sounds/WC Barbet.mp3",
        "desc": "During the breeding season, which commences at the onset of summer, their vocalizations become pronounced and persistent, particularly in the early mornings. Their call is a repetitive “Kot-roo…Kotroo…” that begins with an explosive trrr. These avian creatures primarily feed on fruits and serve a crucial function in forests by aiding in seed dispersal.",
        "top": "-100px",
        "left": "400px"
    },
    {
        "name": "Rose Ringed Parakeet",
        "img": "./bird_images/rose_ringed_parakeet-removebg-preview.png",
        "thumbnail": "./bird_images/rose ringed parakeet.jpg",
        "sound": "./bird_sounds/Rose-ringed Parakeet (Psittacula krameri).mp3",
        "desc": "The male adults exhibit a pink and black neck ring, while the hens and immature birds of both genders either lack neck rings or display subtle, shadow-like pale to dark grey neck rings. Both males and females possess the ability to mimic human speech.",
        "top": "500px",
        "left": "1200px"
    }
]

function generateBirds() {
    let birdID = 0
    for(const bird of birds) {
        const birdDOM = document.createElement("img")
        birdDOM.src = bird.img
        birdDOM.style.position = "absolute"
        birdDOM.style.top = bird.top
        birdDOM.style.left = bird.left
        birdDOM.classList.add("cursor-pointer")
        birdDOM.setAttribute("bird-id", birdID)
        birdDOM.onclick = function() {
            setBirdModal(birdDOM.getAttribute("bird-id"))
            if(!modalVisibile) {
                toggleBirdModal()
                modalVisibile = true
            }
        }

        root.appendChild(birdDOM)
        birdID++
    }
}

function toggleBirdModal() {
    modal.classList.toggle("hidden")
    modal.classList.toggle("opacity-0")

    modalVisibile = !modalVisibile
}

function setBirdModal(birdID) {
    let birdThumbail = document.getElementById("bird-modal-thumbnail")
    let birdName = document.getElementById("bird-modal-name")
    let birdDesc = document.getElementById("bird-modal-desc")
    let birdAudio = document.getElementById("bird-modal-audio")
    birdThumbail.src = birds[birdID].thumbnail
    birdName.innerText = birds[birdID].name
    birdDesc.innerText = birds[birdID].desc

    let oldBirdAudioSource = document.getElementById("bird-modal-audio-source")
    if(oldBirdAudioSource != undefined) {
        oldBirdAudioSource.remove()
    }

    let birdAudioSource = document.createElement("source")
    birdAudioSource.setAttribute("id", "bird-modal-audio-source")
    birdAudioSource.setAttribute("type", "audio/mp3")
    birdAudioSource.src = birds[birdID].sound
    birdAudio.appendChild(birdAudioSource)

    birdAudio.load()
}

generateBirds()