export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  portfolioId?: number;
  emailAddress: string;
  portfolioValuation?: number;
}

export interface CustomerList {
  customerList: Customer[];
}
