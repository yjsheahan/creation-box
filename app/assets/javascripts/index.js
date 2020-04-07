fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/SE1 8NB.json?access_token=pk.eyJ1IjoieWFzbWluanMiLCJhIjoiY2s0MzZhNnduMDM5ZzNucGEzNTJucDkxZyJ9.MvMkfQDy8DyZq5xlPg_f5A')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

// let box = document.querySelector("#js-box");
// // box.addEventListener("click", () => {
// //   box.setTimeout(box.style.backgroundColor = "#931663", 1000);
// // }
// box.style.backgroundColor = "#931663";
