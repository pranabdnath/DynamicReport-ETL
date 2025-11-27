# DynamicReport-ETL
Explains exactly how the XLSB → Power Query → Power Automate → CSV → Apps Script loop works.


DynamicReport-ETL

This repository contains a full ETL automation system built using Google Apps Script, Power Automate, Power Query, and Excel.  
It automates multi-branch reporting without manual downloading or file handling.

Key Capabilities
- Extract XLSB reports from email automatically.
- Generate a stable web link for Power Query.
- Convert XLSB to CSV every 60 minutes using Power Automate.
- Pick up CSV from Drive and push it into Google Sheets.
- Refresh datasets without manual intervention.

Repository Structure
apps-script/        Google Apps Script source files
power-query/        Power Query M Code
power-automate/     Flow logic and exports
excel-mappings/     Mapping docs
documentation/      System architecture and detailed notes
