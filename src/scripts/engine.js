const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    /* Adiciona a classe active e tira após 150 milissegundos (ms) */
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key))
});

document.addEventListener("keydown", (e) => {
    /* console.log(e); */ /* KeyboardEvent captura várias informações das teclas pressionadas (sem a .key)*/
    // console.log(e.key);
    playTune(e.key);
});