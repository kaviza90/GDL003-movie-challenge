

/*let data;*/

document.getElementById("intro").style.display = "none";
document.getElementById("showMovies").style.display = "none";
document.getElementById("formParents").style.display = "none";
document.getElementById("formKids").style.display = "none";
document.getElementById("search").style.display = "none";
document.getElementById("allMenu").style.display = "none";
document.getElementById("watchMovie").style.display = "none";
document.getElementById("showFantasy").style.display = "none";

const goEnterApp = () => {
  document.getElementById("intro").style.display = "block";
  document.getElementById("introApp").style.display = "none";
};

document.getElementById("goMuvik").addEventListener("click", goEnterApp);


const formParents = () => {
  document.getElementById("formParents").style.display = "block";  
  document.getElementById("intro").style.display = "none";
};

document.getElementById("goFormParents").addEventListener("click", formParents);

const formKids = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("formParents").style.display = "none";  
  document.getElementById("formKids").style.display = "block";
  document.getElementById("formPlus").style.display = "none"; 
};

document.getElementById("goFormKids").addEventListener("click", formKids);

const formKidsPlus = () => {
  document.getElementById("formPlus").style.display = "block"; 
};

document.getElementById("buttonPlus").addEventListener("click", formKidsPlus);

const goSearch = () => {
  document.getElementById("allMenu").style.display = "block";
  document.getElementById("search").style.display = "block";
  document.getElementById("intro").style.display = "none";
  document.getElementById("formParents").style.display = "none"; 
  document.getElementById("formKids").style.display = "none";
  document.getElementById("formPlus").style.display = "none";
};

document.getElementById("enter").addEventListener("click", goSearch);

const goShowMovies = () => {
  document.getElementById("showMovies").style.display = "block";
};

document.getElementById("buttonShowMovies").addEventListener("click", goShowMovies);

const goShowFantasy = () => {
  document.getElementById("showFantasy").style.display = "block";
};

document.getElementById("fantasy").addEventListener("click", goShowFantasy);


const goWatchMovies = () => {
  document.getElementById("watchMovie").style.display = "block";
  document.getElementById("allMenu").style.display = "block";
  document.getElementById("showMovies").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("formParents").style.display = "none"; 
  document.getElementById("formKids").style.display = "none";
  document.getElementById("formPlus").style.display = "none"; 
};

document.getElementById("buttonWatchMovie").addEventListener("click", goWatchMovies);

const goBackSearch = () => {
  document.getElementById("allMenu").style.display = "block";
  document.getElementById("search").style.display = "block";
  document.getElementById("watchMovie").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("formParents").style.display = "none"; 
  document.getElementById("formKids").style.display = "none";
  document.getElementById("formPlus").style.display = "none";
};

document.getElementById("backSearch").addEventListener("click", goBackSearch);




/*
  movie=(data)=>{
    return   `<div class= container>
      <img id= imgPoster src="${data.Poster}" style= "width: 135px; height: 210px">
              </div>
  `
  };
  
  const superheroesMovies = ['tt0317705','tt2245084','tt0119282','tt4116284 ','tt1001526']
  
  superheroesMovies.forEach(function(item) {
    fetch('http://www.omdbapi.com?s=' + item + '&apikey=fc3cf220')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ContainerSuperheroes').innerHTML += movie (data);
  
    });
    
  });
  
*/  
