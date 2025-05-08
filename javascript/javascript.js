function navbar_open() {
    if (topnav.style.display === 'block') {
        topnav.style.display = 'none';
    } else {
        topnav.style.display = 'block';
    }
}

function navbar_close() {
    topnav.style.display = "none";
}