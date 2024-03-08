const buttons = document.querySelectorAll("#hotbar button");

function toggleHotbar(hotbarId) {
    console.log(hotbarId);
    const hotbar = document.getElementById(hotbarId);
    hotbar.style.display = hotbar.style.display === "none" ? "block" : "none";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const hotbarId = button.id + "-items";
        toggleHotbar(hotbarId);
    });
});