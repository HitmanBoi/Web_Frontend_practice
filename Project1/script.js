$(document).ready(() => {

  var tasks = 0
  $("#removeAll").hide();

  /* add new task handler */
  $("#add").on("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    var val = $("input").val();
    if(val !=="") {
      tasks +=1;
      var elem = $("<li class='list-group-item'><div class='text-right'><button class='btn btn-danger'> X </button></div>" + val + "</li>");
      $("#myList").append(elem);
      $("input").val("");

      /* remove unique task handler */
      $(".text-right").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        tasks -=1;
        $(this).parent().parent().remove();

        /* show removeAll button when we have more than 3 tasks */
        if(tasks > 2 ) {
          $("#removeAll").show();
        } else {
          $("#removeAll").hide();
        }
      });
    }
  });

  /* removeAll handler */
  $("#removeAll").on("click", event => {
    event.preventDefault();
    event.stopPropagation();
    $(".list-group-item").remove();
    tasks = 0;
    $("#removeAll").hide();
  });
});
