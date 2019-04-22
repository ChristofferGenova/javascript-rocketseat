axios
  .get("https://api.github.com/users/christoffergenova")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
