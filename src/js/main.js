import {bumpNums, numbers as nums} from "./second.js";
import {images} from "./carousel";
import $ from 'jquery';

console.log('numbers is ' + nums);
nums[0]++;
console.log('numbers is now ' + nums);

function imageTemplate (image) {
  return `<div class="carousel">
    <h3 class="image-title">${image.title}</h3>
    <img src="${image.image_url}">
    <p>Picture by: ${image.photographer_id}</p>
  </div>`;
}

images.forEach(function (x) {
  var node = $(".board");
  var imageHTML = imageTemplate(x);
  node.append(imageHTML);
});

$(".carousel").on("click", bumpNums);

// debugger;

// window.nums = nums;

var sleepy = true;

for(var i = 0; i < 9; i++) {
  $(".board").append("<div class='space'></div>");
  // var html = $(".board").html();
  // $(".board").html(html + "<div class=\"space\">");
}
