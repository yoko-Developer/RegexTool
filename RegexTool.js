function replaceText() {
    const pattern = document.getElementById("pattern").value;
    const replacement = document.getElementById("replacement").value;
    const inputText = document.getElementById("inputText").value;

    try {
        const regex = new Regex(pattern, "g");
        const result = inputText.replace(regex, replacement);
        document.getElementById("result").textContent = result;
    } catch (e) {
        document.getElementById("result").textContent = "error: " + e.message;
    }
}

function clearAll() {
    document.getElementById("pattern").value = "";
    document.getElementById("replacement").value = "";
    document.getElementById("inputText").value = "";
    document.getElementById("result").textContent = "";
}
