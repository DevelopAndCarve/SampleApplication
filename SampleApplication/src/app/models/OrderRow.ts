export class OrderRow {
  public Id: number = 0;
  public OrderId: number = 0;
  public ProductId: number = 0;
  public ProductPrice: number = 0.0;
  public Quantity: number = 0;
  public get Amount(): number {
    return this.ProductPrice * this.Quantity;
  }
}
