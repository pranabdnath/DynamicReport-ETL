/**
 * Creates a time-based hourly trigger for csvPickupAndUpload().
 * Run this once manually → it sets up the schedule.
 */

function createHourlyRefreshTrigger() {

  // Delete old triggers for safety
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(t => {
    if (t.getHandlerFunction() === "csvPickupAndUpload") {
      ScriptApp.deleteTrigger(t);
    }
  });

  // Create a new hourly trigger
  ScriptApp.newTrigger("csvPickupAndUpload")
    .timeBased()
    .everyHours(1)
    .create();

  Logger.log("Hourly trigger created successfully.");
}

/**
 * Removes all triggers linked to csvPickupAndUpload()
 */
function deleteRefreshTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(t => {
    if (t.getHandlerFunction() === "csvPickupAndUpload") {
      ScriptApp.deleteTrigger(t);
    }
  });
  Logger.log("All csvPickupAndUpload triggers removed.");
}
