import axios from "axios";


let mockCatalog = [
    {
        _id: "65756",
        title: "Chocolate Chip",
        category: "1",
        unitPrice: 3.44,
        image: "img6.jpg",
        couponCode: "4"
    },
    {
        _id: "65464",
        title: "Cookies Sanwich",
        category: "1",
        unitPrice: 5.32,
        image: "pic2.jpg",
        couponCode: "3"
    },
    {
        _id: "54343",
        title: "Macroons                      ",
        category: "1",
        unitPrice: 7.00,
        image: "pic3.jpg",
        couponCode: "2"
    },
    {
        _id: "35435",
        title: "Fruit Cookies                 ",
        category: "1",
        unitPrice: 5.01,
        image: "pic4.jpg",
        couponCode: "1"
    },
];

class DataService {

    async getCatalog() {
        //get catalog from server
        //return the list pf products
       let response = await axios.get("http://127.0.0.1:5000/api/catalog");
       return response.data;
    }
    async getCoupons(){    //return mockCatalog;
       let getCoupon = await axios.get("http://127.0.0.1:5000/api/couponCode");
       
       return getCoupon.data;
    }
    async saveCoupon(coupon){    //return mockCatalog;
        let response = await axios.post("http://127.0.0.1:5000/api/couponCode", coupon);
        return response.data;
    }
    async saveProduct(product){    //return mockCatalog;
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
    
};

export default DataService;