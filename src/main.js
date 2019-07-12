

let data;




document.getElementById("showMovies").style.display = "none";
document.getElementById("formParents").style.display = "none";
document.getElementById("formKids").style.display = "none";
document.getElementById("search").style.display = "none";
document.getElementById("allMenu").style.display = "none";
document.getElementById("watchMovie").style.display = "none";

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

/*const goShowMovies = () => {
  document.getElementById("showMovies").style.display = "block";
  
  

};*/

const getMovie = (q) =>{
  $.get("https://www.omdbapi.com/?s="+q+"&apikey=fc3cf220", function(rawdata)
  {
  let rawstring =JSON.stringify(rawdata);
  data =JSON.parse(rawstring);
  let title = data.Search[0].Title;
  let year = data.Search[0].Year; 
  let imdburl="https://www.imdb.com/title/+data.Sear[0].imdbID+"/";
  let posterurl =data.Search[0].Poster;
  document.getElementById('answer').innerHTML=
  "<h1>"+title+"</h1><br> <img src= '"
  +posterurl+"'><br><p> Year Released:"
  +year+"</p> <br> <p> IMDB page: <a href='"
  +imdburl+"'target='_blank'>"
  +imdburl+"</a></p>"; }); 
  }

document.getElementById("buttonShowMovies").addEventListener("click", getMovie);

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
