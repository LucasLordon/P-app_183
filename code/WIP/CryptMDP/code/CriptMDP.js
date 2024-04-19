//import sha256 from 'crypto-js/sha256';

const pseudo = "john";         //input
const mdp = "1234";          //input

const saltDefaultLegth = 8      //value for the salt length

const db_pseudo = pseudo        //Stock in the DB
let salt = "";                  //Stock in the DB
let hash = "";                  //Stock in the DB

let mdpAndSalt ="";             //Used in the hash function

salt = generateSalt(saltDefaultLegth)
console.log(salt)

mdpAndSalt = mdpAndSaltAssembly(mdp,salt)
console.log(mdpAndSalt)

hash = crypto_sha256_hash(mdpAndSalt)
console.log(hash)

function generateSalt(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function mdpAndSaltAssembly(mdp,salt) {
  return mdp+salt;
}

function crypto_sha256_hash(data) {
  return sha256(data).toString();
}