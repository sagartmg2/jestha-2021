const getProducts = () => {
  console.log("getProducts")
}

function editProduct() {
  console.log("editProduct")
}

function deleteProduct() {
  console.log("deleteProduct")
}

/*
    module.exports.getProducts = getProducts
    module.exports.editProduct = editProduct
    module.exports.deleteProduct = deleteProduct
 */

module.exports = {
  custom: getProducts,
  getProducts: getProducts,
  editProduct: editProduct,
  deleteProduct,
}
