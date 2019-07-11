

document.getElementById("showMovies").style.display = "none";


const enter = () => {
  document.getElementById("showMovies").style.display = "block";
};


document.getElementById("go").addEventListener("click", enter);
document.getElementByClassName("superheroes").addEventListener("click", enter);
document.getElementByClassName("princesas").addEventListener("click", enter);
document.getElementByClassName("animales").addEventListener("click", enter);
document.getElementByClassName("fantasia").addEventListener("click", enter);


/*

const index = () => {
  document.getElementById("indexContent").style.display = "block";
  document.getElementById("enterseasons").style.display = "none";
};

document.getElementById("goIndex").addEventListener("click", index);

//Muestra data de personajes boton1
const buttonAll = () => {

  //imprime toda la data
  document.getElementById("az").addEventListener("click", () => {
let sortOrderAz = window.data.orderAz(RICKANDMORTY.results);
    document.querySelector('#styleCards').innerHTML = '';

    sortOrderAz.forEach((id) => {
let showAllCharacters = document.getElementById("styleCards");
let imageCharacters = document.createElement("IMG");
    imageCharacters.setAttribute("src", id.image);
    // imageCharacters.setAttribute("width","200");
    //imageCharacters.setAttribute("height","200");
    showAllCharacters.appendChild(imageCharacters);
    showAllCharacters.innerHTML += '<br>' + id.name + '<br>';
    showAllCharacters.innerHTML += 'Species: ' + id.species + '<br>' + 'Gender: ' + id.gender + '<br>' + 'Status: ' + id.status + '<br>' + 'Type: ' + id.type + "<br>";
    });
  });
  document.getElementById("styleCards").innerHTML ="";
  document.getElementById("za").addEventListener("click", () => {
let sortOrderZa = window.data.orderZa(RICKANDMORTY.results);
    document.querySelector('#styleCards').innerHTML = '';
    sortOrderZa.forEach((id) => {
let showAllCharacters = document.getElementById("styleCards");
let imageCharacters = document.createElement("IMG");
    imageCharacters.setAttribute("src", id.image);
    // imageCharacters.setAttribute("width","200");
    //imageCharacters.setAttribute("height","200");
    showAllCharacters.appendChild(imageCharacters);
    showAllCharacters.innerHTML += '<br>' + id.name + '<br>';
    showAllCharacters.innerHTML += 'Species: ' + id.species + '<br>' + 'Gender: ' + id.gender + '<br>' + 'Status: ' + id.status + '<br>' + 'Type: ' + id.type + "<br>";
    });
  });
  
const fullData = window.data.allCharacters(RICKANDMORTY.results),stastAll = window.data.computeStatsAll(RICKANDMORTY.results);
document.getElementById("data").innerHTML = "There are " + stastAll + " characters";
  fullData.forEach((id) => {
let showAllCharacters = document.getElementById("styleCards");
let imageCharacters = document.createElement("IMG");
    imageCharacters.setAttribute("src", id.image);
    // imageCharacters.setAttribute("width","200");
    //imageCharacters.setAttribute("height","200");
    showAllCharacters.appendChild(imageCharacters);
    showAllCharacters.innerHTML += '<br>' + id.name + '<br>';
    showAllCharacters.innerHTML += 'Species: ' + id.species + '<br>' + 'Gender: ' + id.gender + '<br>' + 'Status: ' + id.status + '<br>' + 'Type: ' + id.type + "<br>";
  });
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};
//mensaje mientras cargan imagenes

//acciona boton de mostrar todos los personajes
document.getElementById("all").addEventListener("click", buttonAll);
//Muestra data de personajes boton2

const buttonAlive = () => {
  document.getElementById("order").style.display = "none";
  document.getElementById("styleCards").innerHTML ="";
const fullData = window.data.filterAlive(RICKANDMORTY.results),stastAlive = window.data.computeStatsAlive(RICKANDMORTY.results);
  document.getElementById("data").innerHTML = "There are " + stastAlive + " characters";
  fullData.forEach((id) => {
  let showAllCharacters = document.getElementById("styleCards");
  let imageCharacters = document.createElement("IMG");
    imageCharacters.setAttribute("src", id.image);
    // imageCharacters.setAttribute("width","200");
    //imageCharacters.setAttribute("height","200");
    showAllCharacters.appendChild(imageCharacters);
    showAllCharacters.innerHTML += '<br>' + id.name + '<br>';
    showAllCharacters.innerHTML += 'Species: ' + id.species + '<br>' + 'Gender: ' + id.gender + '<br>' + 'Status: ' + id.status + '<br>' + 'Type: ' + id.type + "<br>";
    
  });

  //AppendChild episodes
  /*const episode2 =  document.getElementById("episode2");
  //document.getElementById("styleCards")
  //new list
  const episodeList2 = ["Chapter 12", "Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"];
      for(let choose2 of episodeList2){
  let listEpisodes2 = document.createElement("li");
      listEpisodes2.textContent = choose2;
      episode2.appendChild(listEpisodes2);
   }
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};

document.getElementById("alive").addEventListener("click", buttonAlive);

//Muestra data de personajes boton3
const buttonDead = () => {
  document.getElementById("order").style.display = "none";
  document.getElementById("styleCards").innerHTML ="";
const fullData = window.data.filterDead(RICKANDMORTY.results),stastDead = window.data.computeStatsDead(RICKANDMORTY.results);
  document.getElementById("data").innerHTML = "There are " + stastDead + " characters";
  fullData.forEach((id) => {
  let showAllCharacters = document.getElementById("styleCards");
  let imageCharacters = document.createElement("IMG");
    imageCharacters.setAttribute("src", id.image);
    // imageCharacters.setAttribute("width","200");
    //imageCharacters.setAttribute("height","200");
    showAllCharacters.appendChild(imageCharacters);
    showAllCharacters.innerHTML += '<br>' + id.name + '<br>';
    showAllCharacters.innerHTML += 'Species: ' + id.species + '<br>' + 'Gender: ' + id.gender + '<br>' + 'Status: ' + id.status + '<br>' + 'Type: ' + id.type + "<br>";
  });

  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};
document.getElementById("dead").addEventListener("click", buttonDead);


const buttonUnknown = () => {
  document.getElementById("order").style.display = "none";
  document.getElementById("styleCards").innerHTML ="";
const fullData = window.data.filterUnknown(RICKANDMORTY.results),statsUnknown = window.data.computeStatsUnknown(RICKANDMORTY.results);
  document.getElementById("data").innerHTML = "There are " + statsUnknown + " characters";
  fullData.forEach((id) => {
  let showAllCharacters = document.getElementById("styleCards");
  let imageCharacters = document.createElement("IMG");
    imageCharacters.setAttribute("src", id.image);
    // imageCharacters.setAttribute("width","200");
    //imageCharacters.setAttribute("height","200");
    showAllCharacters.appendChild(imageCharacters);
    showAllCharacters.innerHTML += '<br>' + id.name + '<br>';
    showAllCharacters.innerHTML += 'Species: ' + id.species + '<br>' + 'Gender: ' + id.gender + '<br>' + 'Status: ' + id.status + '<br>' + 'Type: ' + id.type + "<br>";
  });

  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};
document.getElementById("unknown").addEventListener("click", buttonUnknown);
*/

