
import jwt from 'jsonwebtoken';

const key = process.env.KEY_SECRET;
console.log('[authService], _key_ ', key)
const jwtConfig = {
    type: 'Bearer',
    azp: 'apiTest',
    iss: 'http://localhost:3000/',
    acr: '1',
    nbf: 0,
    defaultAud: 'apiTest',
    defaultAllowedOrigins: '*',
  };

function generateAccessToken() {
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    const expireTime = secondsSinceEpoch + 3600*12; //+ 12hras
    const jwta = {
        jti: `local`,
        sub: `local api`,
        nbf: jwtConfig.nbf,
        iss: jwtConfig.iss,
        aud: 'apiTest',
        type: jwtConfig.type,
        azp: jwtConfig.azp,
        acr: jwtConfig.acr,
        'allowed-origins': '*',
        iat: secondsSinceEpoch,
        exp: expireTime,
        claims: ''
    }
    const token  = {
        access_token: jwt.sign(jwta, key),
        expire: expireTime
    };
    return token;
}



function verify(accessToken) {
    try {
      let accessTokenTmp = accessToken.toString();

      if (accessTokenTmp.startsWith(`${jwtConfig.type} `)) {
        accessTokenTmp = accessToken.substring(jwtConfig.type.length);
      }

      accessTokenTmp = accessTokenTmp.trim();

      return {
        decoded: jwt.verify(accessTokenTmp, key),
        accessToken: accessToken
      };

    } catch(error) {
      console.error('Error en JWT', `${error}`);

      return undefined;
    }
  }

export default{
    generateAccessToken,
    verify
}
