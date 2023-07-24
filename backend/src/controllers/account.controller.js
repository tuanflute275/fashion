import connection from '../config/connectDB'
import bcrypt from 'bcrypt'

// account user

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

let getStatus = (req, res)=>{
    let productId = req.params.id
    let sql = "select status from account where id  = ?";
    connection.query(sql, [productId], (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            res.status(500).json(err)
        }
    })
}

let updateStatus = (req, res) => {
    let userId = req.params.id
    let user = req.body;
    let sql = "update account set status = ? where id = ?";
    connection.query(sql, [user.status, userId], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "account not found" })
            }
            else {
                return res.status(200).json({ message: "account status updated successfully" })
            }
        } else {
            return res.status(500).json(err)
        }
    })
}

let deleteUser = (req, res) => {
    const id = req.params.id;
    let sql = "delete from account where id=?";
    connection.query(sql, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "account not found" })
            } else {
                return res.status(200).json({ message: "delete account successfully" })
            }
        } else {
            res.status(500).json(err)
        }
    })
}

//admin
let getAdmin = (req, res) => {
    let sql = "select id, name,email, status from account where role = 'admin'"
    connection.query(sql, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err)
        }
    })
}

let getOneAdmin = (req, res)=>{
    let adminId = req.params.id
    let sql = "select * from account where id  = ?";
    connection.query(sql, [adminId], (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            res.status(500).json(err)
        }
    })
}

let createAdmin = (req, res) => {
    let admin = req.body;
    let sql = "INSERT INTO `account`(`name`, `email`, `password`, `status`, `role`) VALUES (?,?,?,'true','admin');";
    connection.query(sql, [admin.name, admin.email, bcrypt.hashSync(admin.password, 10)], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Admin added successfully" })
        } else {
            res.status(500).json(err)
        }
    })
}

let updateAdmin = (req, res) => {
    let adminId  = req.params.id
    let admin = req.body;
    console.log(adminId)
    let sql = "UPDATE `account` SET `name`=?,`email`=?,`password`=? WHERE id=?";
    connection.query(sql, [admin.name, admin.email, admin.password,adminId], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Admin not found" })
            } else {
                return res.status(200).json({ message: "Admin updated successfully" })
            }
        }
        else {
            return res.status(500).json(err)
        }
    })
}

let getCountAdmin = (req, res) => {
    let sql = "SELECT COUNT(id) FROM `account` WHERE role = 'admin'"
    connection.query(sql, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err)
        }
    })
}

let getCountUser = (req, res) => {
    let sql = "SELECT COUNT(id) FROM `account` WHERE role = 'user'"
    connection.query(sql, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err)
        }
    })
}

// search
let searchAdmin = (req, res)=>{
    let name = req.query.name;
    let sql = "select * from account  WHERE (role = 'admin') and (name LIKE '%" + name + "%')";
    connection.query(sql, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            res.status(500).json(err)
        }
    })
}
let searchUser = (req, res)=>{
    let name = req.query.name;
    let sql = "select * from account  WHERE (role = 'user') and (name LIKE '%" + name + "%')";
    connection.query(sql, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            res.status(500).json(err)
        }
    })
}

module.exports = {
    getUser,
    deleteUser,
    getStatus,
    updateStatus,
    getAdmin,
    getOneAdmin,
    createAdmin,
    updateAdmin,
    getCountAdmin,
    getCountUser,
    searchAdmin,
    searchUser
}