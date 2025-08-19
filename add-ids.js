// d:/fxtoor/add-ids.js
const fs = require('fs');

// Public folder ka path
const toolsFilePath = `${__dirname}/public/tools.json`;

// JSON file ko read karo
fs.readFile(toolsFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("File read failed:", err);
    return;
  }

  try {
    // JSON data ko parse karo
    const tools = JSON.parse(data);

    // Har object mein "id" property add karo
    const toolsWithId = tools.map((tool, index) => ({
      id: `tool-${String(index + 1).padStart(3, '0')}`,
      ...tool
    }));

    // Updated JSON data ko dobara stringify karo
    const updatedData = JSON.stringify(toolsWithId, null, 2);

    // Updated JSON data ko file mein write karo
    fs.writeFile(toolsFilePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error("File write failed:", err);
      } else {
        console.log("Successfully wrote data to file");
      }
    });
  } catch (err) {
    console.error("File parse failed:", err);
  }
});
