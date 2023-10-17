const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/4ffd1cb72d495000ee38", true); // http method, url addres, status async.

  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Data");
    }
  };

  xhr.onerror = function () {
    reject("Network error");
  };

  xhr.send();
});

async function showTestimonial() {
  try {
    const response = await testimonial;
    let testimonialForHtml = "";

    response.forEach((item) => {
      testimonialForHtml += `
      <div class="d-flex flex-wrap           justify-content-center"
      style="width: 900px">
      <div class="testimonial mt-3 row ">
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
  } catch (err) {
    console.log(err);
  }
}
showTestimonial();

// function for filtering
async function filterTestimonials(rating) {
  try {
    const response = await testimonial;
    let testimonialForHtml = "";

    const dataFiltered = response.filter((data) => data.rating === rating);
    if (dataFiltered.length === 0) {
      testimonialForHtml = `<h3>Data not found !</h3>`;
    } else {
      dataFiltered.forEach((item) => {
        testimonialForHtml += `
        <div class="d-flex flex-wrap           justify-content-center"
        style="width: 900px">
        <div class="testimonial mt-3 row ">
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
    }

    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
