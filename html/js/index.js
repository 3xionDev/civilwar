function toggleCite() {
    if (document.getElementById("works-cited-content").innerHTML == "Click to reveal references") {
        document.getElementById("works-cited-content").innerHTML = "https://learning.mheducation.com/ <br>https://en.wikipedia.org/wiki/American_Civil_War <br>https://www.whitehousehistory.org/bios/abraham-lincoln <br>https://www.battlefields.org/learn/articles/trigger-events-civil-war <br>https://en.wikipedia.org/wiki/Origins_of_the_American_Civil_War"
    } else {
        document.getElementById("works-cited-content").innerHTML = "Click to reveal references"
    }

}
