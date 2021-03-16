$(function () {
  let storageArray = [];
  let data;
  //localStorage.clear();
  loadStorage();

  function loadStorage() {
    if (JSON.parse(localStorage.getItem("array")) != null) {
      data = localStorage.getItem("array");
      storageArray = JSON.parse(data);
    }
    if (storageArray.length > 0) {
      for (var i = 0; i < storageArray.length; i++) {
        console.log(storageArray[i]);
        $("#tbodyTable").prepend(
          "<tr>" +
            "<td>" +
            "<div class='row'>" +
            "<div class='col-1'><input class='form-check-input' type='checkbox' value=''> </div>" +
            "<div class='col-9' id='articleValue'> " +
            storageArray[i] +
            "</div>" +
            "<div class='col-2'>" +
            "<button class='remove'>Ta bort</button>" +
            "</div>" +
            "</div>" +
            "</td>" +
            "</tr>"
        );
      }
    }
  }

  $("#button").on("click", function () {
    let article = $("#userInput").val();

    if (article.trim() == "") {
      alert("Ange en artikel!");
      $("#userInput").val("");
    } else {
      $("#tbodyTable").prepend(
        "<tr>" +
          "<td>" +
          "<div class='row'>" +
          "<div class='col-1'><input class='form-check-input' type='checkbox' value=''> </div>" +
          "<div class='col-9' id='articleValue'> " +
          article +
          "</div>" +
          "<div class='col-2'>" +
          "<button class='remove'>Ta bort</button>" +
          "</div>" +
          "</div>" +
          "</td>" +
          "</tr>"
      );
      storageArray.push(article);
      $("#userInput").val("");
      localStorage.setItem("array", JSON.stringify(storageArray));
    }
  });

  $(document).on("click", ".remove", function () {
    let temp = $(this).closest("tr").find("#articleValue").text().trim();
    $(this).closest("tr").remove();
    console.log(temp);
    for (let i = 0; i < storageArray.length; i++) {
      if (storageArray[i] === temp) {
        storageArray.splice(i, 1);
      }
    }
    localStorage.setItem("array", JSON.stringify(storageArray));
  });

  $(document).on("click", ".form-check-input", function () {
    if ($(this).is(":checked")) {
      $(this).closest("tr").css("background-color", "#00FF00");
    } else {
      $(this).closest("tr").css("background-color", "");
    }
  });
});
