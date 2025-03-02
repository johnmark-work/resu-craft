document.getElementById("generatePDF").addEventListener("click", function () {
    const resumePreview = document.getElementById("resumePreview");

    html2canvas(resumePreview, {
        scale: 3, // High resolution
        useCORS: true,
        backgroundColor: "#ffffff"
        
    }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new window.jspdf.jsPDF("p", "mm", "a4");

        const pageWidth = 210;  // A4 width in mm
        const imgWidth = pageWidth; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
        pdf.save("resume.pdf");
    });
});