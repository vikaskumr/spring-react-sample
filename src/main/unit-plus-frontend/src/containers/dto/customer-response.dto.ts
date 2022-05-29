export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  portfolioId?: number;
  portfolioValuation?: number;
}

export interface CustomerList {
  customerList: Customer[];
}
