const http = require('http');
const port = process.env.PORT || 5000;
const status = process.env.STATUS || 301;

const server = http.createServer((req, res) => {
    const {headers: {host}, url} = req;
    const nowwwHost = host.replace(/^www\./, '');

    if (nowwwHost !== host) {
        res.statusCode = status;
        res.setHeader('Location', `https://${nowwwHost}${url}`);
    }

    res.end();
})

server.listen(port, () => {
    console.log('nowww is running on port', port);
});
