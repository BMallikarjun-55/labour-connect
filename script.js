// LOGIN

function login() {
  alert("Login page will be available soon!");
}


// REGISTER

function register() {
  alert("Registration page will be available soon!");
}


// HIRE WORKER

function hireWorker() {

  document.getElementById("workers").scrollIntoView({
    behavior: "smooth"
  });

}


// FIND WORK

function findWork() {

  alert(
    "Find Work section coming soon! Workers will be able to search and apply for jobs."
  );

}


// SEARCH

function searchWebsite() {

  const search = document
    .getElementById("searchInput")
    .value
    .trim();

  if (search === "") {

    alert("Please enter a job or worker name.");

    return;
  }

  alert(
    "Searching for: " + search
  );

}


// CATEGORY SEARCH

function categorySearch(category) {

  alert(
    "Showing " + category + " jobs and workers."
  );

}


// VIEW ALL

function showAllCategories() {

  alert(
    "All job categories will be displayed here."
  );

}


// CONTACT WORKER

function contactWorker(worker) {

  alert(
    "You selected " +
    worker +
    ". Worker contact feature will be available soon."
  );

}


// POST JOB

function postJob() {

  alert(
    "Post Job feature will be available soon."
  );

}
function contactWorker() {
    const phoneNumber = "9876543210";
    window.location.href = "tel:" + phoneNumber;
}
// Contact Worker
function contactWorker() {

    const phoneNumber = "9876543210";

    window.location.href = "tel:" + phoneNumber;
}


// WhatsApp Worker
function whatsappWorker() {

    const phoneNumber = "919876543210";

    const message =
        "Hello Ramesh, I found your profile on LabourConnect. I would like to discuss a job.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// Hire Worker
function hireWorker() {

    alert(
        "Hire request sent successfully!\n\n" +
        "Worker: Ramesh Kumar\n" +
        "Worker ID: LC1025"
    );
}
