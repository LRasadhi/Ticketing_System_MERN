import jwt from 'jsonwebtoken';

export async function protect(req, res, next) {
  try {
    const tokenString = req.headers.authorization;
    
    // Check if token exists
    if (!tokenString) {
      return res.status(401).json({ message: 'Not authorized, no token provided' });
    }

    // Verify token format
    if (!tokenString.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const token = tokenString.replace("Bearer ", "");
    //console.log('Token received:', token);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token has expired' });
        }
        if (err.name === 'JsonWebTokenError') {
          return res.status(403).json({ message: 'Invalid token' });
        }
        return res.status(500).json({ message: 'Token verification failed' });
      }

      if (!decoded) {
        return res.status(403).json({ message: 'Invalid token payload' });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ message: 'Internal server error during authentication' });
  }
}

export function authorize(...roles) { 
  return (req, res, next) => {
    if (!req.user) { 
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Not authorized for this resource' });
    }
    next();
  };
}