import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { CustomerList, Customer } from './dto/customer-response.dto';

export const useMainContainerEffects = (searchQuery: string) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);

      const customers: CustomerList = await response.json();

      if (
        customers &&
        Array.isArray(customers.customerList) &&
        customers.customerList.length === 0
      ) {
        return Swal.fire('Info', `Customer List is Empty`, 'info');
      }

      setCustomers(customers.customerList);
    } catch (error) {
      console.log('error', error);
      Swal.fire('Error', `Something wenet wrong`, 'error');
      throw error;
    }
  };

  useEffect(() => {
    const url = 'http://localhost:8080/customers/';
    fetchData(url);
  }, [setCustomers]);

  const filterCustomers = (customers: Customer[], query: string): Customer[] => {
    if (!query) {
      return customers;
    }

    return customers.filter((customer: Customer) => {
      const personFirstName: string = customer.firstName.toLowerCase();
      return personFirstName.includes(query.toLocaleLowerCase());
    });
  };

  const filteredCustomers: Customer[] = filterCustomers(customers, searchQuery);

  return {
    filteredCustomers: filteredCustomers
  };
};
