import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { Customer } from '../../containers/dto/customer-response.dto';

export const useCustomerDetailsEffects = (portfolioId: number) => {
  const [customerDetails, setCustomerDeatils] = useState<Customer>();

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const customer: Customer = await response.json();

      if (!customer) {
        return Swal.fire('Error', `Unable to fetch Customer Details`, 'error');
      }

      setCustomerDeatils(customer);
    } catch (error) {
      console.log('error', error);
      Swal.fire('Error', `Something wenet wrong`, 'error');
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
