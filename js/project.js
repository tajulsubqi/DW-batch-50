let data = [];

submitData = (e) => {
  e.preventDefault();

  let project = document.querySelector("#project").value;
  let startDate = document.querySelector("#start-date").value;
  let endDate = document.querySelector("#end-date").value;
  let checkTech = document.querySelectorAll(".multi-input:checked");
  let description = document.querySelector("#description").value;
  let image = document.querySelector("#upload-image").files;
  let images = document.querySelector("#upload-image").value;

  if (project === "") {
    return alert("please input your project name");
  } else if (startDate === "") {
    return alert("please fill the start date");
  } else if (endDate === "") {
    return alert("please fill the end date");
  } else if (description === "") {
    return alert("please fill the project description");
  } else if (checkTech === "") {
    return alert("please choose atleast one option");
  } else if (images === "") {
    return alert("please attach an image");
  }

  let start = new Date(startDate);
  let end = new Date(endDate);
  if (start > end) {
    return alert("End date should be greater than start date");
  }

  // duration
  let waktu = end.getTime() - start.getTime();
  let hari = waktu / (1000 * 3600 * 24);
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(minggu / 4);
  let tahun = Math.floor(bulan / 12);

  if (hari > 0) {
    durasi = hari + " hari";
  }
  if (minggu > 0) {
    durasi = minggu + " minggu";
  }
  if (bulan > 0) {
    durasi = bulan + " bulan";
  }
  if (tahun > 0) {
    durasi = tahun + " tahun";
  }

  console.log("Durasi: " + durasi);

  
  const nodeJsIcon = '<i class="fa-brands fa-node-js"></i>';
  const golangIcon = '<i class="fa-brands fa-golang"></i>';
  const reactIcon = '<i class="fa-brands fa-react"></i>';
  const vueJsIcon = '<i class="fa-brands fa-vuejs"></i>';

  let nodeJs = document.getElementById("cek1").checked ? nodeJsIcon : "";
  let golang = document.getElementById("cek2").checked ? golangIcon : "";
  let reactJs = document.getElementById("cek3").checked ? reactIcon : "";
  let vueJs = document.getElementById("cek4").checked ? vueJsIcon : "";

  let multiInput = document.querySelectorAll(".multi-input:checked");
  if (multiInput.length == 0) {
    return alert("Please Select At least One Technologies");
  }
  image = URL.createObjectURL(image[0]);

  let object = {
    project,
    durasi,
    description,
    image,
    nodeJs,
    golang,
    reactJs,
    vueJs,
    postAt: new Date(),
  };

  data.push(object);
  console.log(data);

  renderBlog();
};

renderBlog = () => {
  document.querySelector(".card").innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    document.querySelector(".card").innerHTML += `
    <div class="card-item">
      <div class="img">
        <img src="${data[i].image}" alt="card-image" />
      </div>
      <h2><a href="/html/project-detail.html">${data[i].project}</a></h2>
      <span>Durasi : ${data[i].durasi}</span>
      <p>${data[i].description}</p>

      <div class="icon">    
      <a href="">${data[i].nodeJs}</a>
      <a href="">${data[i].golang}</a>
      <a href="">${data[i].reactJs}</a>
      <a href="">${data[i].vueJs}</a>
      </div>
      <div class="button">
        <button>edit</button>
        <button>delete</button>
      </div>
  </div>`;
  }
};
