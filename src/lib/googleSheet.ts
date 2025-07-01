import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function appendToSheet(data: any[]) {
  const auth = new google.auth.JWT({
    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.SPREADSHEET_ID!;
  const range = "WebForm!A1"; // adjust the range as needed

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values: [data],
    },
  });
}
