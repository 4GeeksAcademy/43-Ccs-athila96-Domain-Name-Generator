// La funcion DomainGenerator se realizo con el fin de generar dominios aleatorios sin mentoria alguna.

function domainGenerator(extension) {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let ownName = 0; ownName < pronoun.length; ownName++) {
    for (let qualifying = 0; qualifying < adj.length; qualifying++) {
      for (let crucial = 0; crucial < noun.length; crucial++) {
        console.log(
          pronoun[ownName] + adj[qualifying] + noun[crucial] + extension
        );
      }
    }
  }
}

//domainGenerator(".net");

// La funcion domainRamdom se realizo en clase con mentoria para mejorar el codigo y hacerlo mas simple.

function domainRamdom() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".es", ".net"];

  for (let ownName of pronoun) {
    for (let qualifying of adj) {
      for (let crucial of noun) {
        for (let extension of extensions) {
          console.log(ownName + qualifying + crucial + extension);
        }
      }
    }
  }
}

domainRamdom();
