import connection from '../config/connectDB'

let getDetailCategory = (req, res) => {
    let categoryCount;
    let sql = "select count(id) as categoryCount from category";
    connection.query(sql, (err, results) => {
        if (!err) {
            categoryCount = results[0].categoryCount;
            return res.status(200).json({
                message: "select count category",
                dataCount: categoryCount
            })
        } else {
            return res.status(500).json(err)
        }
    })
}

let getDetailProduct = (req, res) => {
    let productCount;
    let query = "select count(id) as productCount from product";
    connection.query(query, (err, results) => {
        if (!err) {
            productCount = results[0].productCount;
            return res.status(200).json({
                message: "select count product",
                dataCount: productCount
            })
        } else {
            return res.status(500).json(err)
        }
    })
}




module.exports = {
    getDetailCategory,
    getDetailProduct
}