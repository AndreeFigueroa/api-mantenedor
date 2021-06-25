
function cors (config={}) {
    return (req, res, next) => {
      console.log('Header::::::', req.headers);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', config.allowedHeaders || 'Content-Type,Origin,Accept');
        res.header('Access-Control-Allow-Methods', config.methods || 'GET,HEAD,OPTIONS');
        res.header('Allow', config.methods || 'GET,HEAD,OPTIONS');
        res.status(config.optionsSuccessStatus || 204);

        if (req.method === 'OPTIONS') {
          return res.end();
        } else {
          return next();
        }
    }
}

export default cors;
