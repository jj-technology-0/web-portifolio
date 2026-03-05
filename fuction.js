// Function ya kubadilisha kurasa bila kuload upya
function showPage(pageId) {
    // Ficha kurasa zote
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });


    // Onyesha ukurasa uliokusudiwa
    document.getElementById(pageId).classList.add('active');
}


// Function ya kutoa Alert (Interactivity)
function showAlert(message) {
    alert("" + message); 
}