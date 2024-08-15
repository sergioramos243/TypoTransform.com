document.getElementById("changeFontButton").addEventListener("click", function() {
    var userText = document.getElementById("userText").value;
    var selectedFont = document.getElementById("fontSelect").value;
    
    var textPreview = document.getElementById("textPreview");
    textPreview.style.fontFamily = selectedFont;
    textPreview.textContent = userText;
});
