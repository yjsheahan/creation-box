fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/SE1 8NB.json?access_token=pk.eyJ1IjoieWFzbWluanMiLCJhIjoiY2s0MzZhNnduMDM5ZzNucGEzNTJucDkxZyJ9.MvMkfQDy8DyZq5xlPg_f5A')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
});

