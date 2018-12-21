var fs = require('fs')
var file = fs.readFileSync('./iconfont.css').toString();
var os = require('os')
 
var icons = file.split(os.EOL);
var getColor = function () {
    return '#' + Math.random().toString(16).substr(-6);
}
var html = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '    <meta charset="UTF-8">' +
    '    <title>iconfont示例</title>' +
    '<link rel="stylesheet" href="./iconfont.css">' +
    '<style>.iconfont{font-size: 44px;height: 44px;width: 44px;margin: 4px;}</style>' +
    '</head>' +
    '<body>';
for (var i = 0; i < icons.length; i++) {
    var icon = icons[i];
    if (icon.includes('icon-')) {
        var className = icon.split('.')[1].split(':')[0];
        html += '<i class="iconfont ' + className + '"></i>';
        if (i % 32 === 1) {
            console.log(i);
            html += '<br />'
            console.log(className);
        }
        // console.log(className);
    }
}
html += '<script>\n' +
    '    var getColor = function () {\n' +
    '        return \'#\' + Math.random().toString(16).substr(-6);\n' +
    '    }\n' +
    '    var icons = document.getElementsByTagName(\'i\')\n' +
    '    for (var i = 0; i < icons.length; i++) {\n' +
    '        var icon = icons[i];\n' +
    '        icon.style.color = getColor()\n' +
    '    }\n' +
    '</script></body>' +
    '</html>'
 
fs.writeFileSync('./examples.html', html)