$(document).ready(function () {
  // 1. Efek hide/show
  $("#toggleButton").click(function () {
    $(".box1").toggle();
  });

  // 2. Efek animasi
  $("#animateButton").click(function () {
    $(".box2").animate(
      {
        opacity: "toggle",
        height: "toggle",
      },
      "slow"
    );
  });

  // 3. DOM Manipulation - Append
  $("#appendButton").click(function () {
    $("<div>New Text</div>").appendTo("#manipulateDiv");
  });

  // 4. DOM Manipulation - Before
  $("#beforeButton").click(function () {
    $("<div>Before Text</div>").insertBefore("#manipulateDiv");
  });

  // 5. DOM Manipulation - After
  $("#afterButton").click(function () {
    $("<div>After Text</div>").insertAfter("#manipulateDiv");
  });

  // 6. DOM Manipulation - Prepend
  $("#prependButton").click(function () {
    $("<div>Prepend Text</div>").prependTo("#manipulateDiv");
  });

  // 7. DOM Manipulation - Remove
  $("#removeButton").click(function () {
    $("#dom-container div").not(":contains('Initial Text')").remove();
  });

  // 8. DOM Manipulation - ReplaceAll
  $("#replaceButton").click(function () {
    $("<p>Replacement Text</p>").replaceAll("#manipulateDiv div");
  });

  // 9. DOM Manipulation - Wrap
  $("#wrapButton").click(function () {
    $("#dom-container div").wrap("<div class='wrapper'></div>");
  });
  $("#unwrapButton").click(function () {
    $("#dom-container div.wrapper").contents().unwrap();
  });
});
