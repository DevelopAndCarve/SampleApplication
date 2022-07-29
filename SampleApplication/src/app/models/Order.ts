import { OrderRow } from './OrderRow';

export class Order {
  public Id: number = 0;
  public CustomerId: number = 0;
  public OrderRows: OrderRow[] = [];

  public get TotalProducts(): number {
    return this.OrderRows.length;
  }

  public get TotalAmount(): number {
    let orderAmount: number = 0;
    this.OrderRows.forEach((row) => (orderAmount = orderAmount + row.Amount));
    return orderAmount;
  }
}
