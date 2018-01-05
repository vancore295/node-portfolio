import * as OrderItem from './orderItem';
import * as Address from './address';

export class Order {
    OrderNumber: Number;
    address: Address;
    items: OrderItem[];
}
