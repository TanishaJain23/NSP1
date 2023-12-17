// app.js

document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('app');

    // Initial login form
    renderLoginForm();

    function renderLoginForm() {
        appContainer.innerHTML = `
            <h2>Login</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <button onclick="handleLogin()">Login</button>
        `;
    }

    function renderSymptomForm() {
        appContainer.innerHTML = `
            <h2>Symptom Form</h2>
            <label for="symptoms">Symptoms:</label>
            <input type="text" id="symptoms" />
            <br />
            <button onclick="handleSymptomSubmit()">Submit Symptoms</button>
        `;
    }

    function renderRecommendation(medicineName, description) {
        appContainer.innerHTML = `
            <h2>Recommendation</h2>
            <p>Medicine: ${medicineName}</p>
            <p>Description: ${description}</p>
        `;
    }

    // Example login logic
    window.handleLogin = function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Implement your authentication logic here (e.g., send a request to the backend)
        // For simplicity, we'll assume the user is logged in.
        renderSymptomForm();
    };

    // Example symptom submit logic
    window.handleSymptomSubmit = function () {
        const symptoms = document.getElementById('symptoms').value;

        // Implement logic to send symptoms to the backend and get a recommendation
        // For simplicity, we'll assume the backend returns a medicine name and description.
        const medicineInfo = {
            medicineName: 'Example Medicine',
            description: 'This is a sample medicine for your symptoms.',
        };

        renderRecommendation(medicineInfo.medicineName, medicineInfo.description);
    };
});
