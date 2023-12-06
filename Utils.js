
/**
 * Gets an array of objects, using the first row as header and the rest as values.
 * @param {string} sheetName - Name of the sheet to take the objects.
 * @param {number} [rowNumber=null] - Optional. First row of values to take.
 * @returns {Array} Array of objects from the sheet.
 */
function getObjectsFromSheets(sheetName, rowNumber = null) {
  if (!sheetName) throw "Invalid sheetName";
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  let values;
  if (rowNumber == null) values = ss.getRange(1, 1, ss.getLastRow()||1, ss.getLastColumn()||1).getValues();
  else values = ss.getRange(rowNumber, 1, ss.getLastRow(), ss.getLastColumn()).getValues();

  let header = values.shift();

  return values.map(function (row) {
      let item = {};
      header.forEach((h, i) => {
          item[h] = row[i];
      });
      return item;
  });
}

/**
* Writes and object or array of objects into a sheet, where the object keys will be the header.
* @param {Object} obj - One object or an Array of objects to be written on the sheet
* @param {string} sheetName - Name of the sheet where it will write.
* @param {boolean} [concat=false] - True if you want to append values to the sheet. False by default, will clear sheet content before it writes.
*/
function writeObjectListToSheet(obj, sheetName, concat = false) {
  if (!Array.isArray(obj)) obj = [obj];
  if (obj.length < 1) throw "Invalid object";

  const sheet = typeof sheetName === "string"? SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName):sheetName;
  let header,
      body,
      data = [];
  header = Object.keys(obj[0]);
  body = obj.map((item) => Object.values(item));
  if (!concat) {
      data.push(header);
      sheet.clearContents();
  }
  data = data.concat(body);
  let row = !concat ? 1 : sheet.getLastRow() + 1,
      column = 1;
  const range = sheet.getRange(row, column, data.length, header.length);
  range.setValues(data);    
}


/**
* Shuffles the elements of an array in-place using the Fisher-Yates algorithm.
*
* @param {Array} array - The array to be shuffled.
* @returns {Array} - The shuffled array.
*/
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
return array
}


/**
* Generates a random integer within a specified range or the default range [1, 10].
*
* @param {number} [min=1] - The minimum value of the range.
* @param {number} [max=10] - The maximum value of the range.
* @returns {number} - A random integer within the specified range.
*/
function random(min = 1, max = 10) {
return (
  Math.floor(
    Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)
) + min;
}



