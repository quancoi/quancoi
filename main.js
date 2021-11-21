
function down(e) {
    document.addEventListener("keydown", function (event) {
        document.getElementById("key" + event.keyCode).classList.remove();
        document.getElementById("key" + event.keyCode).classList.add('key_pressed');
        document.getElementById("key" + event.keyCode).classList.remove();
        document.getElementById("key" + event.keyCode + "b").classList.add('key_pressed');
    });
}

function up(e) {
    document.addEventListener("keyup", function (event) {
        document.getElementById("key" + event.keyCode).classList.remove();
        document.getElementById("key" + event.keyCode).classList.add('key_up');
        document.getElementById("key" + event.keyCode).classList.remove();
        document.getElementById("key" + event.keyCode + "b").classList.add('key_up');
    });
}

