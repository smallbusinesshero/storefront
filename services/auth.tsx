import Base from './base';

export default class AuthService extends Base {

    private token: string = '';
    private static instance: AuthService;

    // Make it private to force usage of getInstance()
    private constructor() {
        super();
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }

        return AuthService.instance;
    }

    register(data) {
        console.log(data);
    }

    login(data) {
        console.log(data);
    }

    logout() {
        this.token = '';
    }

	getUser(userId: string) {
		return this.getRequest(`user/?storeId=${userId}`)
    }
    
    isAuthenticated() {
        return this.token.length > 0
    }
}