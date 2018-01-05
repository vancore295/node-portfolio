import { OrderItem } from './orderItem';
import { Address } from './address';

export class Order {
    OrderNumber: Number;
    Address: Address;
    items: OrderItem[];
}
