const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
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
    /* console.log(key.dataset.key); */
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    
    /* como o forEach passou por todas as teclas de data-key, ele adicionou com o push todas elas dentro do vetor mapedKeys */
    mapedKeys.push(key.dataset.key); 
});

document.addEventListener("keydown", (e) => {
    /* console.log(e); */ /* KeyboardEvent captura várias informações das teclas pressionadas (sem a .key)*/
    // console.log(e.key);

    /* Só irá chamar o playTune IF e.key estiver contido, includes, dentro da variável(vetor) mapedKeys */
    if(mapedKeys.includes(e.key)) {
        playTune(e.key);
    }  
});

/* Adicionando um controle de volume manipulando valores de um input */
const handleVolume = (e) => {
    audio.volume = e.target.value;
    /* console.log(e.target.value); verificar o valor no console */
};

volumeSlider.addEventListener("input", handleVolume);

/* Adicionando uma função de mostrar e esconder os valores das teclas */
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide")); /* o TOGGLE ele é um "liga/desliga", verificando se tem a classe ele retira e verificando que não tem ele adiciona */
};

keysCheck.addEventListener("click", showHideKeys)