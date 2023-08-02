// $$$$$$ //


let logeDin = true;
let paymentDone = true;
let baBe = false;

if(logeDin && paymentDone) {
  console.log ("payment is approved");
}  else {
  console.log("payment is false");
}  if (baBe){
  console.log("payment is pending")
}


// || operator //

let glogin = false ;
let flogin = false;

if (glogin || flogin){
  console.log("logged in succesfully");
} else {
  console.log("wrong password");
}



let mail = false;
let email = false;
if (mail || email) {
  console.log("incorrect email address");
} else {
  console.log("correct password")
}
