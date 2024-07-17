class Person {
    constructor(name){
        this.name=name
    }
    
    greeting(){
        console.log(`hello  from ${this.name}`) 
    }
}
const name = document.getElementById("name");
const height = document.getElementById("height");
const sprites = document.getElementById("sprites");
const sprites_shiny = document.getElementById("sprites_shiny");
const abilities = document.getElementById("abilities");


const button = document.querySelector(".getRandomCharacter");
button.addEventListener('click',(e) =>{
    e.preventDefault()
    console.log("CLicked!")
    name.innerHTML = '<em>Loading...</em>';
    height.innerHTML = '<em>Loading...</em>';
    abilities.innerHTML = '<em>Loading...</em>';
    const randomNumber = Math.ceil(Math.random() * 1025)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then(Response => Response.json())
        .then(CharacterData => {
            console.log(CharacterData);
            name.innerHTML = CharacterData['name'];
            height.innerHTML = (CharacterData['height'] * 10) + 'cm';
            abilities.innerHTML = CharacterData['abilities'][0]['ability']['name'];
            sprites.src=CharacterData['sprites']['front_default'];
            sprites_shiny.src=CharacterData['sprites']['front_shiny'];

        })
    })


