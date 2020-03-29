import Base from './base';

export default class StoresService extends Base {
	getStores(id) {
		return this.getRequest(`stores/?neighborhood=${id}`)
	}

	getStore(id) {
		return this.getRequest(`stores/${id}`)
	}
}