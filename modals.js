var jsdom = require("jsdom");
$ = require("jquery")(new jsdom.JSDOM().window);

$("#create_account_btn").on("click", function() {
  $(".ui.modal.create_acc").modal("show");
  console.log("Create Account Button was pressed");
});

$("#log_in_btn").on("click", function() {
  $(".ui.modal.log_in").modal("show");
});

// new TypeIt(".type_it_welcome", {
//   strings: ["Welcome Developer, ", "This is a Playlist just for You!"],
//   cursor: false,
//   lifeLike: true
// });
