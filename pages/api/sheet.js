import { google } from "googleapis";
import keys from "../../spreadsheet-keys.json";

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed', success: false });
    }
    const { Wallet, Twitter, RetweetURL, Telegram } = req.body;
    console.log(req.body);
    // Log the data being sent to the API
    console.log('Data to be appended:', { Wallet, Twitter, RetweetURL, Telegram });

    const auth = await google.auth.getClient({
      projectId: keys.project_id,
      credentials: {
        type: "service_account",
        private_key: keys.private_key,
        client_email: keys.client_email,
        client_id: keys.client_id,
        token_url: keys.token_uri,
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1wXBPh046ft9n1ibsRGLjWXphMNOGTyTRoYTsLJ7MfY4";

    // Specify the range from A to D to allow appending data across these columns
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "DeFiPage1!A:D", // Specify range covering the columns where data will be appended
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS", // Ensures data is inserted into the next available row
      resource: {
        values: [[Wallet, Twitter, RetweetURL, Telegram]],
      },
    });

    // Log the API response
    // console.log('API Response:', response);

    return res.status(200).json({ message: 'Data stored successfully', success: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Error storing data', success: false });
  }
}
