// BLOCKS AND SCOPES 

const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building'
 return 'The stars over the ' + skyscraper + ' in ' + city;
} console.log (logCitySkyline())


// GLOBAL SCOPE 
let satellite ='The Moon'
const galaxy = 'The Milky Way'
var stars = 'North Star'
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())

// BLOCK SCOPES 

function  logVisibleLightWaves(){
  const lightWaves = 'Moonlight'
  console.log (lightWaves)
}
logVisibleLightWaves()
//  YOU CANT LOG THIS OUT SIMPLY BECASUE ITS OUTSIDE THE CURLY BRACES {}  console.log(lightWaves)

// Scopes Pollution

const satellitex = 'The Moon';
const galaxyx = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
//  you dont declare like this beacause it will  result an error console.log( stars)
/// GOOD SCOPING 

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';

  if (region === 'The Arctic') {
   let lightWaves = 'Northern Lights';
   console.log(lightWaves)
  }

  console.log(region);
};

logVisibleLightWaves();
