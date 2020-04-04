import Base from './base';

export default class ProductsService extends Base {

    private token: string = '';

    private authenticated: boolean = false;

    register(data) {
    }

	getUser(userId: string) {
		return this.getRequest(`user/?storeId=${userId}`)
	}
}