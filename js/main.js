$(document).ready(function () {
  $(document).ready(function () {

  //Services Cards
  $("#darkModeBtn").click(function () {
    $("body").toggleClass("dark-mode");
  });

  const services = [
    { name: "غذاء", img: "images/food.jpg" ,icon: "fa-bowl-food" },
    { name: "دواء", img: "images/medicine.jpg", icon: "fa-pills" },
    { name: "مياه", img: "images/water.jpg", icon: "fa-droplet" },
    { name: "إيواء", img: "images/shelter.jpg", icon: "fa-house" }
  ];

  services.forEach(s => {
    $("#servicesCards").append(`
      <article class="col-md-3">
        <div class="card text-center">
          <img src="${s.img}">
          <div class="card-body">
            <i class="fa-solid ${s.icon} fa-2x mb-2"></i>
            <h5>${s.name}</h5>
            <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#helpModal">
              تفاصيل
            </button>
          </div>
        </div>
      </article>
    `);
  });
  

});


  // Distribution Table
  const data = [
    { type: "غذاء", area: "غزة", place: "مدرسة الشاطئ", time: "10 صباحًا", status: "متاح" },
    { type: "دواء", area: "خان يونس", place: "مستشفى ناصر", time: "12 ظهرًا", status: "مكتمل" },
    { type: "مياه", area: "رفح", place: "مركز الإغاثة", time: "9 صباحًا", status: "متاح" }
  ];

  function render(area) {
    $("#distributionTable").html("");
    data.forEach(d => {
      if (area === "all" || d.area === area) {
        $("#distributionTable").append(`
          <tr>
            <td>${d.type}</td>
            <td>${d.area}</td>
            <td>${d.place}</td>
            <td>${d.time}</td>
            <td>${d.status}</td>
          </tr>
        `);
      }
    });
  }

  render("all");
  $("#areaFilter").change(function () {
    render(this.value);
  });

  // Animation
  $("#services").hide().fadeIn(1500);
});
