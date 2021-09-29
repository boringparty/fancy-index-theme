var txtFile = new XMLHttpRequest();
var allText = "";
txtFile.onreadystatechange = function () {
    if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
        allText = txtFile.responseText;
        allText = allText.split("\n").join("<br>")
         .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
         .replace(/\*(.*)\*/gim, '<i>$1</i>')
         .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
         .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
         .replace(/\n$/gim, '<br />');
         }
     document.getElementById('readme').innerHTML = allText;
}
txtFile.open("GET", 'readme.md', true);
txtFile.send(null);
