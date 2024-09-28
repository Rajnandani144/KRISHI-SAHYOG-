document.getElementById("diagnosisForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const cropType = document.getElementById("cropType").value;
    const symptoms = document.getElementById("symptoms").value;
    
    // Simulate diagnosis with a simple match (actual backend integration needed)
    let diagnosis = "Disease not recognized. Please try uploading an image.";
    if (cropType.toLowerCase() === "wheat" && symptoms.toLowerCase().includes("yellow")) {
        diagnosis = "Yellow Rust Disease detected. Apply fungicide immediately.";
    }
    
    // Display diagnosis
    document.getElementById("diagnosisResult").innerText = diagnosis;
});