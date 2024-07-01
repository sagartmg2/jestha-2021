export const getProducts = () => {
  console.log("getProducts")
}

export function editProduct() {
  console.log("editProduct")
}

export function deleteProduct() {
  console.log("deleteProduct")
}

/*
    module.exports.getProducts = getProducts
    module.exports.editProduct = editProduct
    module.exports.deleteProduct = deleteProduct
 */

// module.exports = {
//   custom: getProducts,
//   getProducts: getProducts,
//   editProduct: editProduct,
//   deleteProduct,
// }

export default {
  custom: getProducts,
  getProducts: getProducts,
  editProduct: editProduct,
  deleteProduct,
}
