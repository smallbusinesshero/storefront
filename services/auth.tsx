import Base from "./base";

export default class AuthService extends Base {
  private token: string = "";
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

  async register(data) {
    console.log(data);

    // Register Store
    const StoreDraft = new FormData();
    StoreDraft.append("address.country", "DE");
    StoreDraft.append("address.streetName", data.store_street);
    StoreDraft.append("address.streetNumber", data.store_streetnr);
    StoreDraft.append("address.postalCode", data.store_zipcode);
    StoreDraft.append("address.city", data.store_city);
    StoreDraft.append("address.state", "");
    StoreDraft.append("description.de_DE", data.description);
    StoreDraft.append("geoLocation.de_DE", "");
    StoreDraft.append("name.de_DE", data.store_name);
    StoreDraft.append("shopCategory", "");
    StoreDraft.append("contactPhone", data.phone);
    StoreDraft.append("contactHomepage", data.store_website);
    StoreDraft.append("contactEmail", data.store_email);
    StoreDraft.append("contactWhatsapp", data.store_whatsapp);
    StoreDraft.append("contactInstagram", data.store_instagram);
    StoreDraft.append("contactFacebook", data.store_facebook);
    StoreDraft.append("contactFacetime", data.store_facetime);
    StoreDraft.append("contactSkype", data.store_skype);
    StoreDraft.append("contactTwitter", data.store_twitter);
    StoreDraft.append("profileImage", data.store_image);
    StoreDraft.append("profileVideoURL", data.store_video);
    StoreDraft.append("hasDelivery", data.store_delivery);
    StoreDraft.append("hasPickup", data.store_pickup);
    StoreDraft.append("hasShipping", data.store_shipping);
    StoreDraft.append("shopOwnerImage", data.store_ownerimage);
    StoreDraft.append("shopOwnerFirstname", data.firstname);
    StoreDraft.append("shopOwnerLastname", data.lastname);
    StoreDraft.append("shopOwnerEmail", data.email);
    StoreDraft.append("numberOfEmployees", data.store_members);

    //Register Products
    const resultCreateStore = await AuthService.getInstance().postRequest(
      `stores/`,
      StoreDraft,
      "multipart/form-data"
    );

    // const promises = data.products.map(async product => {
    //     let ProductDraft = {
    //         productData: {
    //             name: product.name,
    //             description: product.description,
    //             price: product.price
    //         },
    //         productImage: product.image
    //     }
    //     const createProduct = await AuthService
    //         .getInstance()
    //         .postRequest(`stores/${storeId}/product`, ProductDraft, 'multipart/form-data');
    //     return createProduct
    // })

    // const resultCreateProducts = await Promise.all(promises)
    // console.log(resultCreateProducts)
  }

  login(data) {
    console.log(data);
  }

  logout() {
    this.token = "";
  }

  getUser(userId: string) {
    return this.getRequest(`user/?storeId=${userId}`);
  }

  isAuthenticated() {
    return this.token.length > 0;
  }
}
