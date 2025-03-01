function change_status(num) {
    


    $("#me, #exp, #inf").removeClass("activated");
    $("#about_me, #previous_experience, #educacion").addClass("hidden");


    if (num === 1) {
        $("#me").addClass("activated");
        $("#about_me").removeClass("hidden");
    } else if (num === 2) {
        $("#exp").addClass("activated");
        $("#previous_experience").removeClass("hidden");
    } else if (num === 3) {
        $("#inf").addClass("activated");
        $("#educacion").removeClass("hidden");
    } else {
        console.log("Número fuera de rango");
    }
}

function change_view() {
    

    if ($("#header").hasClass("hidden")) {
        console.log("Modo WEB ON");
        $("#header").removeClass("hidden");
        $("#previous_experience, #educacion, #dowload_pdf_button").addClass("hidden");
    } else {
        console.log("MODO CV ON");
        $("#header").addClass("hidden");
        $("#about_me, #previous_experience, #educacion, #dowload_pdf_button").removeClass("hidden");
    }


    //$("#about_me, #previous_experience, #educacion, #dowload_pdf_button").toggleClass("hidden");


    // Cambiar el texto del botón
    var button = $("#cv_button");
    if (button.text().includes("Modo CV")) {
        button.text("Modo Web");
    } else {
        button.text("Modo CV");
    }  
}













function downloadPDF() {
    // temporal
    $("#change_watch_mode, #header").addClass("hidden");

    var { jsPDF } = window.jspdf;

    // Selecciona el contenido que quieres exportar (puede ser "body" o un div específico)
    var element = document.body; 

    html2canvas(element, { scale: 2 }).then(canvas => {
        var imgData = canvas.toDataURL("image/png");
        var pdf = new jsPDF("p", "mm", "a4");

        // Obtiene el tamaño del PDF
        var pdfWidth = pdf.internal.pageSize.getWidth();
        var pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Agrega la imagen al PDF
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        // Descarga el archivo
        pdf.save("CV_Gadi_rebolledo.pdf");
    });
}