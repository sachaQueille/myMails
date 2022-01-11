let messagesCount = $("p").length;
$("#count").text(messagesCount);

$("body").on("click", ".trash", function () {
  $(this).parent().remove();
  messagesCount--;
  $("#count").text(messagesCount);
});

$("#btn-add").click(function () {
  let msg = $("#add-message").val();
  $("body").append(
    ` 
        <div class='row'>
        <img class='avatar' src='./img/avatar-2.jpg'>
        <div class='content'>
        <h6>Sacha Hauberdon</h6>
        <p>` +
      msg +
      `</p>
        </div>
        <img class='trash' src='./img/trash.png'>
        </div>
    `
  );
  messagesCount++;
  $("#count").text(messagesCount);
  $("#add-message").val("");
});

$("#btn-search").click(function () {
  $("h6").each(function () {
    if ($("#search-bar").val() != $(this).text()) {
      $(this).parent().parent().fadeOut();
    }
  });
});
