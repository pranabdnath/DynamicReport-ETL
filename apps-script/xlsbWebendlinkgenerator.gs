function xlsbWebendlinkgenerator() {
  const folderId = '15RV-8E2onfr-2FtZarU0-4nl7Lon8AMT';
  const folder = DriveApp.getFolderById(folderId);
  const query = 'subject:"Lead assign vs connectivity report" has:attachment';

  Logger.log('=== XLSB Web Link Generator Started ===');
  Logger.log('Timestamp: ' + new Date().toLocaleString());

  const threads = GmailApp.search(query, 0, 5);
  if (threads.length === 0) {
    Logger.log('No matching emails found.');
    return;
  }

  const latestMessage = threads[0].getMessages().pop();
  const attachments = latestMessage.getAttachments();

  Logger.log(`Found ${attachments.length} attachment(s) from: "${latestMessage.getSubject()}"`);

  let savedCount = 0;
  let finalDownloadLink = "";

  attachments.forEach(att => {
    const name = att.getName().trim().toLowerCase();

    if (name.endsWith('.xlsb')) {
      const fileName = att.getName().trim();
      const newFile = folder.createFile(att);
      newFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

      Logger.log(`Uploaded: ${newFile.getName()} (${newFile.getSize()} bytes)`);

      const files = folder.getFilesByName(fileName);
      while (files.hasNext()) {
        const f = files.next();
        if (f.getId() !== newFile.getId()) {
          f.setTrashed(true);
          Logger.log(`Deleted old version: ${f.getName()}`);
        }
      }

      finalDownloadLink = `https://drive.google.com/uc?export=download&id=${newFile.getId()}`;
      Logger.log(`File is ready for download: ${finalDownloadLink}`);

      savedCount++;
    }
  });

  Logger.log(`XLSB files uploaded and cleaned: ${savedCount}`);
  Logger.log('=== Script Finished Successfully ===');

  if (finalDownloadLink) {
    Logger.log('COPY THIS LINK FOR POWER QUERY');
    Logger.log(finalDownloadLink);
  } else {
    Logger.log('No XLSB file found to generate link.');
  }
}
