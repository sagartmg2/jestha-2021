// const fs = require("fs")
import fs from "fs"

/* global objects 
    console.log
    setTimout
    __filename
    __dirname
    modules
    require
*/

/* node modules
     core
       - fs
       - path
       - http 
     third party  eg: bcrypt
     local
*/

console.log("connected: node > ide.js")
// document.getElementsByTagName("h1")[0].style.color = "Red"
// console.log(__filename)
// console.log(__dirname)

// const signup = require("./auth")
import signup from "./auth.js"

signup("ram", "secret")
signup("shyam", "secret")
signup("sita", "secret")


// const product = require("./product")
import product from "./product.js"

// const product = { getProduct: fn , editProduct :fn, ......}

product.getProducts()
product.editProduct()
product.deleteProduct()
product.custom()


// const { getProducts, editProduct, deleteProduct } = require("./product")
import  { getProducts, editProduct, deleteProduct }  from "./product.js"
getProducts()
editProduct()

fs.writeFileSync("log.txt", "log something")
