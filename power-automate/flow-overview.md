This flow is responsible for converting the XLSB file produced by Apps Script into a structured CSV file.

1. Trigger every 60 minutes.
2. Call Apps Script-generated web link to download the latest XLSB file.
3. Save XLSB in OneDrive.
4. Convert XLSB to CSV using Excel Online (Business) connector.
5. Save CSV in a monitored OneDrive folder.
6. Google Apps Script picks up the latest CSV and updates Google Sheets.
