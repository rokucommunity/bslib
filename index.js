var fs = require('fs');
var path = require('path');

module.exports = {
    version: JSON.parse(
        fs.readFileSync(
            path.join(__dirname, 'package.json')
        ).toString()
    ).version,
    //load the contents of bslib.brs
    source: fs.readFileSync(path.join(__dirname, 'source', 'bslib.brs')).toString()
};
