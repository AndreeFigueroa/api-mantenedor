import authServices from '../auth/services/authServices';

function auth (config={}) {
    return (req, res, next) => {
        const token = req.headers['authorization']||req.headers['Authorization'];
        console.log('Token:', token);
        if (token) {
            const jwt = authServices.verify(token);
            if(!jwt){
                return res.status(403).json({ msg:'Forbidden' });
            }
            next();
        }
        else{
            res.status(403).json({ msg:'Forbidden' });
        }
    }
}

export default auth;
