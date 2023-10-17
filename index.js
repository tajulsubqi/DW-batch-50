const express = require("express");
const path = require("path");
const app = express();

// IMPOR DATA JS
const dataDummy = require("./src/mocks/dataDummy-project.js");

// SETUP TO CALL HBS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static("src/assets"));

// PARSING DATA DARI KLIEN
app.use(express.urlencoded({ extended: false }));

// GET and POST methods
app.get("/", home);
app.get("/contact", contact);
app.get("/project-detail", projectDetail);
app.get("/add-project", project);
app.post("/add-project", addProject);
app.get("/testimonials", testimonials);
app.get("/delete-project/:id", deleteProject);
app.get("/edit-project/:id", editProject);
app.post("/edit-project/:id", updateProject);

// FUNGSi
//Home
function home(req, res) {
  res.render("index", { project: dataDummy });
}

// contact
function contact(req, res) {
  res.render("contact");
}

// project detail
function projectDetail(req, res) {
  const { id } = req.params;
  res.render("project-detail", { project: dataDummy[id] });
}

// Add project
function project(req, res) {
  res.render("add-project");
}

// testimonial
function testimonials(req, res) {
  res.render("testimonials");
}

// add a new project
function addProject(req, res) {
  const { project, startDate, endDate, description, javaScript, reactJs, nodeJs, golang, uploadImage } = req.body;

  let start = new Date(startDate);
  let end = new Date(endDate);
  if (start > end) {
    return alert("End date should be greater than start date");
  }

  // DURATION
  let durationDiff = end.getTime() - start.getTime();
  let day = durationDiff / (1000 * 3600 * 24);
  let week = Math.floor(day / 7);
  let month = Math.floor(week / 4);
  let year = Math.floor(month / 12);
  let duration = "";

  if (day > 0) {
    duration = day + " Day";
  }
  if (week > 0) {
    duration = week + " Week";
  }
  if (month > 0) {
    duration = month + " Month";
  }
  if (year > 0) {
    duration = year + " Year";
  }

  const data = {
    project,
    duration,
    description,
    javaScript,
    reactJs,
    nodeJs,
    golang,
    uploadImage: "/img/img-1.jpg",
  };

  dataDummy.unshift(data);
  console.log(data);
  console.log(dataDummy);

  res.redirect("/");
}
// ============================

// DELETE PROJECT
function deleteProject(req, res) {
  const { id } = req.params;

  dataDummy.splice(id, 1);
  res.redirect("/");
}

// EDIT PROJECT
function editProject(req, res) {
  const { id } = req.params;
  res.render("edit-project", { project: dataDummy[id], id });
}

//updateProject
function updateProject(req, res) {
  const { id } = req.params;
  const { project, startDate, endDate, description, javaScript, reactJs, nodeJs, golang, uploadImage } = req.body;

  let start = new Date(startDate);
  let end = new Date(endDate);
  if (start > end) {
    return alert("End date should be greater than start date");
  }

  // DURATION
  let durationDiff = end.getTime() - start.getTime();
  let day = durationDiff / (1000 * 3600 * 24);
  let week = Math.floor(day / 7);
  let month = Math.floor(week / 4);
  let year = Math.floor(month / 12);
  let duration = "";

  if (day > 0) {
    duration = day + " Day";
  }
  if (week > 0) {
    duration = week + " Week";
  }
  if (month > 0) {
    duration = month + " Month";
  }
  if (year > 0) {
    duration = year + " Year";
  }

  dataDummy[id].project = project;
  dataDummy[id].description = description;
  dataDummy[id].duration = duration;
  dataDummy[id].javaScript = javaScript;
  dataDummy[id].reactJs = reactJs;
  dataDummy[id].nodeJs = nodeJs;
  dataDummy[id].golang = golang;

  console.log(dataDummy);

  res.redirect("/");
}

// Mulai Server
const port = 4000;
app.listen(port, () => {
  console.log(`API listening on PORT ${port}`);
});
