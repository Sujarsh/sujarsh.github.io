function showUnit(unitId) {
    let units = document.getElementsByClassName("unit");
    for (let i = 0; i < units.length; i++) {
        units[i].style.display = "none";
    }
    document.getElementById(unitId).style.display = "block";
}
