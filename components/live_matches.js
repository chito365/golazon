// Import necessary TypeScript definitions
import axios from 'axios';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch data from the updated JSON URL
        const response = await axios.get('https://betadvisor.club/data/dta/b/data.json');
        const data = response.data;

        // Check if the "Odds" column is missing or empty
        const filteredData = data.filter((row: any) => !!(row[7]));

        // Build the HTML content
        const dataContainer = document.getElementById('dataContainer');
        if (dataContainer) {
            filteredData.forEach((row: any) => {
                const divElement = document.createElement('div');
                divElement.innerHTML = `
                    <p>Date: ${row[0]}</p>
                    <p>Match: ${row[3]}</p>
                    <p>Score: ${row[4]}</p>
                    <p>Bet Type: ${row[6]}</p>
                    <p>Odds: ${row[7]}</p>
                    <hr>
                `;
                dataContainer.appendChild(divElement);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
