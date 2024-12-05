/** @type {{ items: Product[] }} */
const data = require("../data/products.json");
const { getConnection } = require("./supabase");
const conn = getConnection();

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/products").Product} Product
 */

/**
 * Get all users
 * @returns {Promise<DataListEnvelope<Product>>}
 */
async function getAll() {
  const { data, error, count } = await conn
    .from("products")
    .select("*", { count: "estimated" });
  return {
    isSuccess: true,
    data: data,
    total: count,
  };
}

/**
 * Get product by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function get(id) {
  const item = data.items.find((product) => product.id == id);
  return {
    isSuccess: !!item,
    data: item,
  };
}

/**
 * Add a new product
 * @param {Product} product
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function add(product) {
  product.id =
    data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
  data.items.push(product);
  return {
    isSuccess: true,
    data: product,
  };
}

/**
 * Update a product
 * @param {number} id
 * @param {Product} product
 * @returns {Promise<DataEnvelope<Product>>}
 */
async function update(id, product) {
  const productToUpdate = await get(id);
  Object.assign(productToUpdate.data, product);
  return {
    isSuccess: true,
    data: productToUpdate.data,
  };
}

/**
 * Remove a product
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
  const itemIndex = data.items.findIndex((product) => product.id == id);
  if (itemIndex === -1)
    throw { isSuccess: false, message: "Item not found", data: id };
  data.items.splice(itemIndex, 1);
  return {
    isSuccess: true,
    message: "Item deleted",
    data: id,
  };
}

module.exports = {
  getAll,
  get,
  add,
  update,
  remove,
};
