// User Interface:
const sources = game.src();

function gameInfo(n, element) {
  let place1;
  let place2;
  if (n % 2 === 1) {
    src = sources.path1;
    color = "#def1ff";
    place1 = element.attr("id");
  } else if (n % 2 === 0) {
    src = sources.path2;
    color = "#e8c0bd";
    place2 = element.attr("id");
  }

  return { src, color, place1, place2 };
}

$(document).ready(() => {

  // GO button
  $("#go").on("click", () => {
    const name1 = $("#user1-name").val();
    // save info in localStorage
    localStorage.name1 = name1;
    const name2 = $("#user2-name").val();
    localStorage.name2 = name2;
  });

  // play game

  let click = 1;
  let point1 = 0;
  let point2 = 0;
  let position1 = [];
  let position2 = [];
  let winner1;
  let winner2;

  // Read localStorage
  const name1 = localStorage.name1;
  const name2 = localStorage.name2;

  if (name1 && name2) {
    $("#name1").attr("value", name1);
    $("#name2").attr("value", name2);

    $("#p1").val(point1);
    $("#p2").val(point2);

    $('<img id="marker1" class="sign inline">').appendTo(".info1");
    $("#marker1").attr("src", sources.path1);

    $('<img id="marker2" class="sign inline">').appendTo(".info2");
    $("#marker2").attr("src", sources.path2);
  }

  $(".cell").on("click", function() {
    let $this = $(this);
    let $thisId = $this.attr("id");

    if (position1.indexOf($thisId) >= 0) {
      return;
    }

    if (position2.indexOf($thisId) >= 0) {
      return;
    }

    if (winner1 || winner2) {
      return;
    }

    const result = gameInfo(click, $this);

    $this.css("background-color", result.color);
    $("<img>")
      .attr("src", result.src)
      .appendTo($this);

    if (result.place1) {
      position1.push(result.place1);
    }
    if (result.place2) {
      position2.push(result.place2);
    }

    click++;

    if (click >= 5) {
        // looping over options
      for (let i = 0; i < game.options.length; i++) {
        winner1 = true;
        winner2 = true;
        const option = game.options[i];
        // looping over each array inside options
        for (let j = 0; j < option.length; j++) {
          if (position1.indexOf(option[j]) < 0) {
            winner1 = false;
          }
          if (position2.indexOf(option[j]) < 0) {
            winner2 = false;
          }
          if (!winner1 && !winner2) {
            break;
          }
        }
        if (winner1 || winner2) {
          break;
        }
      }

      // winner part
      if (winner1) {
        point1++;
        $("#p1").val(point1);
        $("#game-board").css("display", "none");
        $("#winner")
          .css("display", "block")
          .fadeIn(4000);
      }

      if (winner2) {
        point2++;
        $("#p2").val(point2);
        $("#game-board").css("display", "none");
        $("#winner")
          .css("display", "block")
          .fadeIn(4000);
      }
    }

    if (click === 9) {
      if (!winner1 && !winner2) {
        $("#game-board").css("display", "none");
        $("#loser")
          .css("display", "block")
          .fadeIn(4000);
      }
    }
  });

  // next button
  $("#restart").on("click", () => {
    if ($("#winner").css("display", "block")) {
      $("#winner")
        .css("display", "none")
        .fadeOut(4000);
    }

    if ($("#loser").css("display", "block")) {
      $("#loser")
        .css("display", "none")
        .fadeOut(4000);
    }

    $("#game-board").css("display", "block");
    $(".cell").css("background-color", "#252d65");
    $(".cell img").remove();

    click = 1;
    position1 = [];
    position2 = [];
    winner1 = false;
    winner2 = false;
  });

  // finish button
  $("#finish").on("click", () => {
    // $('a').attr('href', '#home');

    $("#user1-name").val("");
    $("#user1-name").attr("placeholder", "Player#1 Name:");
    $("#user2-name").val("");
    $("#user2-name").attr("placeholder", "Player#2 Name:");

    $("#name1").removeAttr("value");
    $("#name2").removeAttr("value");

    $("#p1").val("");
    $("#p2").val("");

    $(".info1 img").remove();
    $(".info2 img").remove();
  });
});
