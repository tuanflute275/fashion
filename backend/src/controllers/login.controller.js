import connection from '../config/connectDB'
import jwt from 'jsonwebtoken';
require('dotenv').config()
import nodemailer from 'nodemailer'

let createUser = (req, res) => {
    let user = req.body;
    let sql = "select email, password, role, status from account where email = ?";
    connection.query(sql, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                let sql = "insert into account(name, email, password, status, role) values(?, ?, ?, 'true', 'user')"
                connection.query(sql, [user.name, user.email, user.password], (err, results) => {
                    if (!err) {
                        res.status(200).json({ message: "success registered" })
                    }
                    else {
                        res.status(500).json(err)
                    }
                })
            } else {
                return res.status(400).json({ message: "Email đã tồn tại !" })
            }
        }
        else {
            return res.status(500).json(err)
        }
    })
}

let loginUser = (req, res) => {
    let user = req.body;
    let sql = "select id, email, password, role, status from account where email = ? ";
    connection.query(sql, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].password != user.password) {
                return res.status(401).json({ message: "incorrect username or password" })
            }
            else if (results[0].status === 'false') {
                return res.status(401).json({ message: "wait for admin approval" })
            } else if (results[0].password == user.password) {
                const response = { id: results[0].id, email: results[0].email, role: results[0].role }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
                res.status(200).json({ token: accessToken })
            } else {
                return res.status(400).json({ message: "something went wrong .Please try again later" })
            }
        } else {
            return res.status(500).json(err)
        }
    })
}

//nodemailer
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let forgotPassword = (req, res) => {
    const user = req.body;
    let sql = "select email, password from account where email=? ";
    connection.query(sql, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                return res.status(200).json({ message: "password sent successfully to your email" })
            } else {
                var mailOption = {
                    from: process.env.EMAIL,
                    to: results[0].email,
                    subject: 'Password by cafe Management System',
                    html: '<p><b>Your Login details for cafe Management System</b><br/><b>Email:</b>' + results[0].email + '<br/><b>Password:</b>' + results[0].password + '<br/><a href="http://localhost:4200">Click here to Login</a></p>'
                }
                transporter.sendMail(mailOption, (err, info) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
                });
                return res.status(200).json({ message: "password sent successfully to your email." })
            }
        } else {
            return res.status(500).json(err)
        }
    })
}

let getUser = (req, res) => {
    let sql = "select id, name,email, status from account where role = 'user'"
    connection.query(sql, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err)
        }
    })
}

let updatePassword = (req, res) => {
    let user = req.body;
    let sql = "update account set status=? where id=?";
    connection.query(sql, [user.status, user.id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "user not found" })
            }
            else {
                return res.status(200).json({ message: "user update successfully" })
            }
        } else {
            return res.status(500).json(err)
        }
    })
}

let checkToken = (req, res) => {
    return res.status(200).json({ message: "true" })
}

let changePassword = (req, res) => {
    const user = req.body;
    const email = res.locals.email;
    var sql = " select * from account where email=? and password=?";
    connection.query(sql, [email, user.oldPassword], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                return res.status(400).json({ message: "incorrect old password" })
            } else if (results[0].password == user.oldPassword) {
                sql = "update account set password=? where email=?";
                connection.query(sql, [user.newPassword, email], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "password update successfully" })
                    }
                    else {
                        return res.status(500).json(err)
                    }
                })
            }
            else {
                return res.status(400).json({ message: "something went wrong please try again later" })
            }
        }
        else {
            return res.status(500).json(err)
        }
    })
}


module.exports = {
    createUser,
    loginUser,
    forgotPassword,
    getUser,
    updatePassword,
    checkToken,
    changePassword
}