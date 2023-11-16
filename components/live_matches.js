// Import necessary TypeScript definitions for jQuery and DataTables
import * as $ from 'jquery';
import 'datatables.net';

$(document).ready(() => {
    // Read the data from the updated JSON URL
    $.getJSON('https://betadvisor.club/data/dta/b/data.json', (data) => {
        // Check if the "Odds" column is missing or empty
        const filteredData = data.filter((row: any) => !!(row[7]));

        // Build the HTML table
        const tableBody = $('#myTable tbody');
        filteredData.forEach((row: any) => {
            const htmlRow = `<tr>
                                <td>${row[0]}</td>
                                <td>${row[3]}</td>
                                <td>${row[4]}</td>
                                <td>${row[6]}</td>
                                <td>${row[7]}</td>
                            </tr>`;
            tableBody.append(htmlRow);
        });

        // Initialize DataTables
        $('#myTable').DataTable({
            pageLength: 20, // Set the number of items per page to 20
        });
    });
});
