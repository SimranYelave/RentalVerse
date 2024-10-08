import express from 'express'
import jwt from 'jsonwebtoken'

const app = express();
const port = 3000;

// Middleware to extract the JWT token from the Authorization header
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Assuming the token is prefixed with 'Bearer'

    if (token) {
      jwt.verify(token, 'random#secret', (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = decoded; // Attach decoded user information to the request object
        next();
      });
    } else {
      return res.status(401).json({ message: 'Token not provided' });
    }
  } else {
    return res.status(401).json({ message: 'Authorization header not found' });
  }
});

// Protected route that requires authentication
app.get('/add', (req, res) => {
  res.json({ message: 'You are authorized!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});