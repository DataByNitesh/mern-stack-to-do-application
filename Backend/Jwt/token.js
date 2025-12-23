import jwt from "jsonwebtoken";

export const generateTokenAndSaveInCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true only in HTTPS
    path: "/",
    maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
  });
};
