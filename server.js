const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


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
        },
        {
            name: 'fourth name'
        }

    ]);

});

app.get('/stuff', (req, res) => {
    console.log('console stuff test')
    const stuff = [
        {
            name: 'skateboard'
        },
        {
            name: 'dice'
        },
        {
            name: 'kite'
        },
        {
            name: 'fourth stuff'
        }

    ];

    res.json(stuff);    
});


app.get('/blue', (req, res) => {
    console.log('console blue test')

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





app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});