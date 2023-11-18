const goToProfile = document.getElementById("btn_profile");
const goToBox = document.getElementById("btn_box");
const logOut = document.getElementById("btn_log_out");

goToProfile.addEventListener("click", function() {
    window.location.href = "/ShinyBox";
})

goToBox.addEventListener("click", () => {
    window.location.href = "/ShinyBox/box"
})

logOut.addEventListener("click", () => {
    console.log("LogOut realizado");
    window.location.href = "/";
    sessionStorage.clear();
})

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        window.location.href = "/loginNaoEncontrado";
    } else {
        countRegions()
    }
})

function countRegions() {

}