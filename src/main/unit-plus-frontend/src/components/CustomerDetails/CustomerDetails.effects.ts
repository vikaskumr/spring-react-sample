import { useEffect, useState } from 'react';

import { Customer } from '../../containers/dto/customer-response.dto';

export const useCustomerDetailsEffects = (portfolioId: number) => {
  const [customerDetails, setCustomerDeatils] = useState<Customer>();

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const customer: Customer = await response.json();
      setCustomerDeatils(customer);
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  };

  useEffect(() => {
    const url = `http://localhost:8080/customers/${portfolioId}`;
    fetchData(url);
  }, [setCustomerDeatils]);

  return {
    customerDetails: customerDetails
  };
};
