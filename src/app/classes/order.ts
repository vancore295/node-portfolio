import { OrderItem } from './orderItem';
import { Address } from './address';

export class Order {
    Address: Address;
    Recipient: Object;
    items: OrderItem[];
}
