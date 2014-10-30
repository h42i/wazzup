var socket = io('http://was.geht.im.hackspace.siegen.so:13374');
var elems = document.getElementsByClassName("status");

socket.on('status', function (data) {
  console.log(data);
  
  for (var i = 0; i < elems.length; i++) {
    var elem  = elems[i];
    var key   = elem.getAttribute("data-key");
    var unit  = elem.getAttribute("data-unit");

    var value = data[key];

    if (value != undefined) {
      elem.innerHTML = value + " " + unit;
    }
  } 
  
  var body = document.body;
  var img = document.getElementById("lock_image");
  var data_fields = document.getElementById("data");

  if (data["state"] == "open") {
    body.style.background = "#00FF00";
    img.setAttribute("src", "assets/images/open.svg");
    data_fields.style.color = "#00FF00";
  } else {
    body.style.background = "#FF0000";
    img.setAttribute("src", "assets/images/closed.svg");
    data_fields.style.color = "#FF0000";
  }
});
