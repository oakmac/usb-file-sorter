const fs = require('fs-plus');

const sourcePath = '/media/oakmac/storage/Car USB/';
const destPath = '/media/oakmac/C848-2D72/';

fs.copySync(sourcePath, destPath);
