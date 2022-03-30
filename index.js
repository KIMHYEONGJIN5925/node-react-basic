const express = require("express");
const app = express();
const port = 5000;

const { User } = require("./models/User");

const bodyParser = require("body-parser");
// 바디파서가 application/x-www-form-urlencoded 같은 정보를 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// 바디파서가 application/json 정보를 분석해서 가져옴
app.use(bodyParser.json());

const config = require("./config/key");
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  //회원가입할때 필요한 정보들 client에서 가져오면 그것들을 db에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("/login", (req, res) => {
  //요청된 이메일을 db에서 스캔.
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "해당하는 유저가 없습니다.",
      });
    }
  });
  //있다면 비밀번호가 같은지 확인.

  //비밀번호 맞으면 유저를 위한 토큰 생성.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
