export class Order {
    orderNumber: number;
    orderDate: Date;
    deliveryDate: Date;
    buyerID: number;
    card: number;
    fullAddress: string;
    details?: OrderDetails;

}

export class OrderDetails {
    cost?: Number;
}