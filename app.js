function randomgen(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extension = ['.com', '.gov']


 document.querySelector("#url").innerHTML =
    pronoun[randomgen(pronoun)] +
    adj[randomgen(adj)] +
    noun[randomgen(noun)] +
    extension[randomgen(extension)];
};