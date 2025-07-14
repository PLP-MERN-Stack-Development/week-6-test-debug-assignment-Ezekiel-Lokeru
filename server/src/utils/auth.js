const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'test_secret';
const EXPIRES_IN = '1h';

function generateToken(payload) {
    if (typeof payload.toObject === 'function') {
        payload = payload.toObject();
    }
    return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
}

module.exports = { generateToken };