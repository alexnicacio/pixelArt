let colorInput;
let inputHeight;
let inputWidth;
let first;
let last;
let pixelCanvas;

colorInput = $("#colorPicker");

console.log("HEX color" + colorInput.val());

// Select size input

$("form").submit(function (event) {
  clearTable();
  inputHeight = $("#input_grid_height").val();
  inputWidth = $("#input_grid_width").val();
  makeGrid(inputHeight, inputWidth);
  event.preventDefault();
});

function clearTable() {
  $("tr").remove();
  $("td").remove();
}

pixelCanvas = $("#pixel_canvas");

function makeGrid(row, column) {
  for (let i = 0; i < row; i++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let j = 0; j < column; j++) {
    $("tr").append("<td></td>");
  }
}

//Changes the background color of each cell, with the color chosen by the user.
$("table").on("click", "td", function (event) {
  $(event.target).css("background", colorInput.val());
});
