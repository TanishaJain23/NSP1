// recommendation.js

// Define a simple object to store medicine recommendations
var medicineRecommendations = {
    Fever: "Acetaminophen",
    Cough: "Cough syrup",
    // Add more recommendations for other symptoms
  };
  
  function recommendMedicine() {
    // Get the selected symptom
    var symptom = document.getElementById("symptom").value;
  
    // Perform recommendation logic
    var medicineRecommendation = getMedicineRecommendation(symptom);
  
    // Display the recommendation
    var recommendationDiv = document.getElementById("recommendation");
    recommendationDiv.innerHTML = "<h3>Recommended Medicine:</h3><p>" + medicineRecommendation + "</p>";
  }
  
  function getMedicineRecommendation(symptom) {
    // Retrieve medicine recommendation from the object
    return medicineRecommendations[symptom] || "No specific recommendation";
  }
  