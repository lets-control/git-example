function setTagContent(tagname, content) {
    var container = document.getElementById(tagname);
    container.innerHTML = content;
}

setTagContent("tag001", "Value");