const minhaPromise = () => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/christoffergenova");
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
