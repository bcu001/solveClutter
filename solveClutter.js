const fs = require('fs');
const path = require('path');

/**
 * Move files from a directory to subdirectories based on their file extensions.
 * @param {string} pathName - The path of the directory containing the files.
 */
function solveClutter(pathName) {
    // Read the contents of the directory
    fs.readdir(pathName, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return;
        }

        // For each file, create a new folder with its extension name if it doesn't exist
        files.forEach(file => {
            try {
                // Get the full path of the file
                let sourcePath = path.join(pathName, file);

                // Get the extension of the file
                let extension = path.extname(file).slice(1); // Remove the dot from the extension

                // Construct the destination folder path based on the file extension
                let destinationFolder = path.join(pathName, extension);

                // Create the destination folder if it doesn't exist
                if (!fs.existsSync(destinationFolder)) {
                    fs.mkdirSync(destinationFolder, { recursive: true });
                }

                // Construct the destination file path
                let destinationPath = path.join(destinationFolder, file);

                // Move the file to the destination folder
                fs.renameSync(sourcePath, destinationPath);
                console.log(`File '${file}' moved to '${destinationFolder}' successfully.`);
            } catch (error) {
                console.error(`Error moving file '${file}':`, error);
            }
        });
    });
}

module.exports = solveClutter;
