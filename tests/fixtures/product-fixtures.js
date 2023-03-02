const { appDataSource } = require("../../models/appDataSource");

const createCategories = (categoryList) => {
  const data = [];

  for (const category of categoryList) {
    data.push([category.id, category.name]);
  }

  return appDataSource.query(
    `
    INSERT INTO categories (
      id,
      name
    ) VALUES ?
    `,
    [data]
  );
};

const createProducts = (productList) => {
  const data = [];

  for (const product of productList) {
    data.push([
      product.id,
      product.name,
      product.price,
      product.discount,
      product.image_url,
      product.description,
      product.shipping_fee,
      product.category_id,
    ]);
  }

  return appDataSource.query(
    `
    INSERT INTO products (
      id,
      name,
      price,
      discount,
      image_url,
      description,
      shipping_fee,
      category_id
    ) VALUES ?
  `,
    [data]
  );
};

module.exports = { createCategories, createProducts };
