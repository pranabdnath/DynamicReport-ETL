This document explains how Power Query maps columns from the downloaded XLSB or CSV files into Excel tables.

1. The Power Query script imports the file through the dynamically generated download link.
2. The first row is promoted as headers.
3. All columns are cast to text to avoid schema mismatches.
4. The transformed table is loaded into an Excel sheet.
5. The final CSV output follows the same column order required by the Google Sheet importer.
