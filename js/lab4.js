$(document).ready(function() {
  var $listNode = $("#image_list");
  var $captionNode = $("#caption");
  var $imageNode = $("#image");
  var links = $listNode.find('a');

  var i, linkNode, image;
  var imageCache = [];
  for(i = 0; i < links.length; i++){
    linkNode = links[i];

    image = new Image();
    image.src = $(linkNode).attr('href');
    image.title = $(linkNode).attr('title');
    imageCache.push(image);
  }

  var imageCounter = 0;

  function swapImage() {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    console.log(image);
    $imageNode.attr('src', image.src);
    $captionNode.html(image.title);
  }
  var timer = setInterval(swapImage, 2000);
});
