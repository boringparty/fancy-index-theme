var txtFile = new XMLHttpRequest();
var allText = "";
txtFile.onreadystatechange = function () {
    if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
        allText = txtFile.responseText;
        allText = allText.split("\n").join("<br>")
    }
     document.getElementById('readme').innerHTML = allText;
}
txtFile.open("GET", 'readme.md', true);
txtFile.send(null);
