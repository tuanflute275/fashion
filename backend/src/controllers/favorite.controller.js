import connection from '../config/connectDB'

let addFavorite = (req, res) => {
    let data = req.body // account_id, product_id

    // kiem tra da thich
    let sql = 'SELECT * FROM favorite WHERE account_id = ? AND product_id = ?'
    connection.query(sql, [data.account_id, data.product_id], (err, results) => {
        if (results.length > 0) {
            let sql1 = 'DELETE FROM favorite WHERE account_id = ? AND product_id = ?'
            connection.query(sql1, [data.account_id, data.product_id], (err, results) => {
                return res.status(200).json({ message: "deleted favorite" })
            })
        } else {
            // theem yeu thich neu chua co
            let sql = 'INSERT INTO favorite SET ?'
            connection.query(sql, [data], (err, results) => {
                if (!err) {
                    return res.status(200).json({ message: "favorite added successfully" })
                } else {
                    res.status(500).json(err)
                }
            })
        }
    })
}

let deleteFavorite = (req, res) => {
    let sql = 'DELETE FROM favorite WHERE account_id = ? AND product_id = ?'
    connection.query(sql, [req.params.account_id, req.params.product_id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "favorite not found" })
            } else {
                return res.status(200).json({ message: "delete favorite successfully" })
            }
        } else {
            res.status(500).json(err)
        }
    })
}
let getFavorite = (req, res) => {
    let sql = 'SELECT f.*, p.* FROM favorite f JOIN product p ON f.product_id = p.id WHERE f.account_id = ?'
    connection.query(sql, [req.params.account_id], (err, results) => {
        if (!err) {
                return res.status(200).json(results)
        } else {
            res.status(500).json(err)
        }
    })
}
let getCount = (req, res) => {
    let sql = 'SELECT COUNT(id) as count FROM `favorite` Where account_id = ?'
    connection.query(sql,[req.params.account_id],(err, results)=>{
        if(!err){
            return res.status(200).json(results)
        }else{
            return res.status(500).json(err)
        }
    })
}

module.exports = {
    addFavorite,
    deleteFavorite,
    getFavorite,
    getCount
}