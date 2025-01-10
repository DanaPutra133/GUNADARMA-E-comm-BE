const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//register control saat login 
//semua nya di sini jangan di ganti ganti status nya debug nya bingung gua
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: `email ${email} telah terdaftar! gunakan email lain`,
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: `registrasi suskses! selamat datang *${userName}*`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

/* bagian login user */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "email tidak terdaftar! silahkan registrasi dulu",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "password salah! ulangi lagi",
      });
      /* mulai dari sini variabel nya pakai yang checkUser kalau mau di get */
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );
    //cek user sebagai siapa login nya
    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: `Sukses login sebagai *${checkUser.userName}* dengan role *${checkUser.role}*`,
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout nya

const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "logout sukses!",
  });
};

//auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "ini buat user mildelware!",
    });

  try {
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "user tiakdipercaya!",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
