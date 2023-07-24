import connection from '../config/connectDB'

let addCart = (req, res) => {
    let data = req.body // account_id, product_id

    // kiem tra da thich
    let sql = 'SELECT * FROM cart WHERE account_id = ? AND product_id = ?'
    connection.query(sql, [data.account_id, data.product_id], (err, results) => {
        if (results.length > 0) {
            let sql1 = 'DELETE FROM cart WHERE account_id = ? AND product_id = ?'
            connection.query(sql1, [data.account_id, data.product_id], (err, results) => {
                return res.status(200).json({ message: "deleted Cart" })
            })
        } else {
            // theem yeu thich neu chua co
            let sql = 'INSERT INTO cart SET ?'
            connection.query(sql, [data], (err, results) => {
                if (!err) {
                    return res.status(200).json({ message: "Cart added successfully" })
                } else {
                    res.status(500).json(err)
                }
            })
        }
    })
}

let deleteCart = (req, res) => {
    let sql = 'DELETE FROM cart WHERE account_id = ? AND product_id = ?'
    connection.query(sql, [req.params.account_id, req.params.product_id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Cart not found" })
            } else {
                return res.status(200).json({ message: "delete Cart successfully" })
            }
        } else {
            res.status(500).json(err)
        }
    })
}
let getCart = (req, res) => {
    let sql = 'SELECT f.*, p.* FROM cart f JOIN product p ON f.product_id = p.id WHERE f.account_id = ?'
    connection.query(sql, [req.params.account_id], (err, results) => {
        if (!err) {
                return res.status(200).json(results)
        } else {
            res.status(500).json(err)
        }
    })
}
let getCount = (req, res) => {
    let sql = 'SELECT COUNT(id) as count FROM `cart` Where account_id = ?'
    connection.query(sql,[req.params.account_id],(err, results)=>{
        if(!err){
            return res.status(200).json(results)
        }else{
            return res.status(500).json(err)
        }
    })
}



module.exports = {
    addCart,
    deleteCart,
    getCart,
    getCount
}