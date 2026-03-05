function copyNumber() {
    const number = "0998973573";
    const popup = document.getElementById("copyPopup");

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(number).then(showPopup);
    } else {
        const textarea = document.createElement("textarea");
        textarea.value = number;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showPopup();
    }

    function showPopup() {
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 2000);
    }
}