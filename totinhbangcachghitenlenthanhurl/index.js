const express = require('express');
const punycode = require('punycode');
const app = express()
const port = 3000;
app.get('/',(req, res)=>{
    try {
        var data = req.rawHeaders[1];
        console.log(data);
        if (data == `localhost:${port}`) {
            throw "";
        }
        var sp = data.split('.')
        if (sp.length != 3) {
            throw "";
        }
        ucfirst = (string) => 
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        var tenban = ucfirst(punycode.toUnicode(sp[0]));
        var tennguoikia = ucfirst(punycode.toUnicode(sp[1]));
        res.type('html').send(`<b>${tenban}</b> va ten nguoi kia <b>${tennguoikia}</b>`);
    } catch {
        res.type('html').send('Oi ban oi, the nay la do r');
    }
    
});


app.listen(port, ()=>{console.log('ok')})
