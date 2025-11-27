let
    Source = Binary.Buffer(Web.Contents("YOUR_XLSB_DOWNLOAD_LINK")),
    Imported = Excel.Workbook(Source),
    Output = Imported{[Item="MIDAS",Kind="Sheet"]}[Data]
in
    Output
