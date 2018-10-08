const http = require('http');
const url = require('url');


const server = http.createServer(function (req, res) {
    const urlObj = url.parse(req.url, true);

    if (urlObj.pathname === '/') {
        res.write('Hello World, from the server');
        res.end();
    } else if (urlObj.pathname === '/hello') {
        res.statusCode = 200;
        const nameParam = urlObj.query.name;
        res.write(
            `<html>
            <head>
            <meta charset="UTF-8">
            <title>Hallo!</title>
            </head>
            <body>
                <h1>Hallo ${nameParam}!</h1>
            </body>
            </html>`);
        res.end();
    } else if (urlObj.pathname === '/einwort') {
        res.statusCode = 200;
        const spellParam = urlObj.query.w;

        res.write(
            `<html>
            <head>
                <meta charset="UTF-8">
                <title>ÖNORM A 1081</title>
            </head>
            <body>
                <h1>Eingegebenes Wort: ${spellParam}</h1>
            <br>
            <ul>`);

        for (i = 0; i < spellParam.length; i++) {
            let buchstabe = spellParam[i].toUpperCase();
            let oenorm = dictionary.get(spellParam[i].toUpperCase());
            res.write(`<li>${buchstabe + oenorm}</li>`);
        }
        res.write(`
            </ul>    
            </body>
            </html>`);

        res.end();
    } else {
        res.statusCode = 404;
        res.write('404 not found');
        res.end();
    }
});


let dictionary = new Map();
dictionary.set('A', ' wie Anton');
dictionary.set('Ä', ' wie Ärger');
dictionary.set('B', ' wie Berta');
dictionary.set('C', ' wie Cäsar');
dictionary.set('D', ' wie Dora');
dictionary.set('E', ' wie Emil');
dictionary.set('F', ' wie Friedrich');
dictionary.set('G', ' wie Gustav');
dictionary.set('H', ' wie Heinrich');
dictionary.set('I', ' wie Ida');
dictionary.set('J', ' wie Julius');
dictionary.set('K', ' wie Konrad');
dictionary.set('L', ' wie Ludwig');
dictionary.set('M', ' wie Martha');
dictionary.set('N', ' wie Nordpol');
dictionary.set('O', ' wie Otto');
dictionary.set('Ö', ' wie Österreich');
dictionary.set('P', ' wie Paula');
dictionary.set('Q', ' wie Quelle');
dictionary.set('R', ' wie Richard');
dictionary.set('S', ' wie Siegfried');
dictionary.set('ß', ' wie scharfes S');
dictionary.set('T', ' wie Theodor');
dictionary.set('U', ' wie Ulrich');
dictionary.set('Ü', ' wie Übel');
dictionary.set('V', ' wie Viktor');
dictionary.set('W', ' wie Willhelm');
dictionary.set('X', ' wie Xaver');
dictionary.set('Y', ' wie Ypsilon');
dictionary.set('Z', ' wie Zürich');

server.listen(3000);
