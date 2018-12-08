$("#create_account_btn").on("click", function() {
  $(".ui.modal").modal("show");
});

new TypeIt(".type_it_welcome", {
  strings: ["Welcome Developer, ", "This is a Playlist just for You!"],
  cursor: false,
  lifeLike: true
});
