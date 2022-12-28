shoes=["imagess/1.jpg", "imagess/2.jpg", "imagess/3.jpg", "imagess/4.jpg"]

function random_shoe(){
  var random_num=Math.floor(Math.random()*shoes.length)
  random_image=shoes[random_num]
  document.querySelector("img.random_img").setAttribute("src", random_image);
}
