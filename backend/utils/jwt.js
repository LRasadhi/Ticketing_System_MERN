import jwt from 'jsonwebtoken';

export function generateToken(user) {
    return jwt.sign(
        { 
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role
        },
        process.env.JWT_SECRET
    );
};
