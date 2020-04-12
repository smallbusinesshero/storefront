import Base from "./base";

export default class ProductsService extends Base {
  getProducts(storeId) {
    return this.getRequest(`products/?storeId=${storeId}`);
  }

  getProduct(id) {
    return this.getRequest(`products/${id}`);
  }
}
