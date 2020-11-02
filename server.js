const express = require('express');
const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
    console.log('console log test')
    res.json([
        {
            name: 'lila'
        },
        {
            name: 'devar'
        },
        {
            name: 'ilan'
        }
    ]);


res.send(`<!DOCTYPE>
    <html>
        <head>
        </head>
        <body>
            <h1 style="color:blue">I'm bluuuuuuue!!!!</h1>
        </body>
    </html>
`);

});

app.get('/stuff', (req, res) => {
    console.log('console log test')
    res.json([
        {
            name: 'skateboard'
        },
        {
            name: 'dice'
        },
        {
            name: 'kite'
        }
    ]);
});


app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});