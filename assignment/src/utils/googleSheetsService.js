// src/utils/googleSheetsService.js

// Configuration
// You generally want to keep these in a .env file
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SPREADSHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

// This is the sheet name where data is stored.
const SHEET_NAME = "NGOs";

// Helper to load the Google Identity Services script
export const loadGoogleScript = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);

        const apiScript = document.createElement("script");
        apiScript.src = "https://apis.google.com/js/api.js";
        apiScript.async = true;
        apiScript.defer = true;
        apiScript.onload = () => {
            window.gapi.load('client', resolve);
        };
        apiScript.onerror = reject;
        document.body.appendChild(apiScript);
    });
};

export const initGoogleClient = async () => {
    return new Promise((resolve, reject) => {
        if (!window.gapi) {
            reject("Google API script not loaded");
            return;
        }
        window.gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        }).then(() => {
            resolve();
        }).catch(reject);
    });
};


// 1. Fetch all NGOs (For Public & Admin)
// Uses API Key (Read Only) if no user token, or authenticated client if available
export const fetchNGOs = async () => {
    try {
        if (!SPREADSHEET_ID || !API_KEY) {
            console.warn("Missing Google Sheets Config");
            // Return dummy data for demo purposes if config is missing
            return [
                { id: "1", ngo_name: "Demo NGO 1", category: "Education", city: "Mumbai", description: "Helping kids", email: "contact@ngo1.com", status: "approved", logo_url: "https://placehold.co/100" },
                { id: "2", ngo_name: "Demo NGO 2", category: "Health", city: "Delhi", description: "Health for all", email: "contact@ngo2.com", status: "pending", logo_url: "https://placehold.co/100" },
            ];
        }

        // Use gapi.client.sheets if initialized, otherwise simple fetch with API key?
        // Actually, for public read-only of a public sheet, simple fetch is easiest.
        // But assuming the sheet might be private or we want structured data:

        let response;
        if (window.gapi && window.gapi.client && window.gapi.client.sheets) {
            response = await window.gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A2:H`, // Assuming headers in row 1
            });
        } else {
            // Fallback to fetch API with API Key for public view (if sheet is public)
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A2:H?key=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();
            response = { result: data };
        }

        const rows = response.result.values;
        if (!rows || rows.length === 0) {
            return [];
        }

        // Map rows to objects
        // Assuming Order: id, ngo_name, category, city, description, email, logo_url, status
        return rows.map((row, index) => ({
            rowIndex: index + 2, // 1-based index, +1 for header
            id: row[0],
            ngo_name: row[1],
            category: row[2],
            city: row[3],
            description: row[4],
            email: row[5],
            logo_url: row[6],
            status: row[7]?.toLowerCase() || "pending", // Default to pending
        }));

    } catch (error) {
        console.error("Error fetching NGOs:", error);
        return [];
    }
};

// 2. Update NGO Status (Admin Only)
// Requires OAuth Token
export const updateNGOStatus = async (rowIndex, newStatus, tokenClient) => {
    try {
        // We need an access token to write. 
        // In a real app, we'd manage the token lifecycle.
        // Here we assume the component triggers the token request if needed.

        // This function assumes gapi.client is initialized and we have a token.

        const params = {
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!H${rowIndex}`, // Column H is status
            valueInputOption: "RAW",
            resource: {
                values: [[newStatus]]
            }
        };

        const response = await window.gapi.client.sheets.spreadsheets.values.update(params);
        return response.result;

    } catch (error) {
        console.error("Error updating status:", error);
        throw error;
    }
};

// 3. Login Helper
export const initTokenClient = (callback) => {
    if (!window.google) return null;
    return window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: callback,
    });
}
