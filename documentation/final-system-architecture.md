This system automates multi-source ETL processing.

Components:
- Apps Script to fetch XLSB and CSV files.
- Power Query for data transformation.
- Power Automate for scheduled data movement and conversion.
- Excel tables serving as intermediate datasets.
- Google Sheets as the final reporting layer.

The workflow:
- Every hour Apps Script generates a new web-end link.
- Power Automate downloads updated XLSB into OneDrive.
- Power Query refreshes automatically every 60 minutes.
- Converted CSV files are placed in a monitored folder.
- Apps Script imports them into Google Sheets.

About This Project:

apps-script/

    xlsbWebendlinkgenerator.gs
    
    csvPickupAndUpload.gs
    
    scheduleRefreshTrigger.gs

power-query/

    CDR-query.m
    MIDAS-query.m

power-automate/

    flow-overview.md
    flow-json.json

excel-mappings/

    mapping-overview.md

documentation/

    system-architecture.md
