// Array of object
let dataTestiomonial = [
  {
    author: "Jujutsu kaisen",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/jujutsu.png",
    rating: 5,
  },
  {
    author: "One punch man",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/saitama.png",
    rating: 5,
  },
  {
    author: "Black clover",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/black-clover.png",
    rating: 4,
  },
  {
    author: "Kimetsu no yaiba",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/demon-slayer.png",
    rating: 4,
  },
  {
    author: "world trigger",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/trigger.png",
    rating: 4,
  },
  {
    author: "Nisekoi",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/nisekoi.png",
    rating: 2,
  },
  {
    author: "Blue lock",
    quote: "Genre: crime, drama, dark, comedy",
    image: "/img/blue-lock.png",
    rating: 1,
  },
];

function showTestimonial() {
  let testimonialForHtml = "";

  dataTestiomonial.forEach((item) => {
    testimonialForHtml += `
      <div class="testimonial mt-3 row ">
      <div class="container col">
      <div class="col ">  
        <img src=${item.image} class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">~ ${item.author}</p>
        <p class="rating"> ${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      </div>
      </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialForHtml;
}
showTestimonial();

// function for filtering
function filterTestimonials(rating) {
  let testimonialForHtml = "";

  const dataFiltered = dataTestiomonial.filter((data) => data.rating === rating);
  console.log(dataFiltered);

  if (dataFiltered.length === 0) {
    testimonialForHtml = `<h3>Data not found !</h3>`;
  } else {
    dataFiltered.forEach((item) => {
      testimonialForHtml += `
      <div class="testimonial mt-3 row">
      <div class="col-8">  
        <img src=${item.image} class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">~ ${item.author}</p>
        <p class="rating"> ${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
    </div>
      `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialForHtml;
}
