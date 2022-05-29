package com.example.unitplus.customer.repository;

import java.math.BigDecimal;

import com.example.unitplus.customer.dto.CustomerDto;
import com.example.unitplus.customer.storage.CustomerDatabase;

import org.springframework.stereotype.Repository;

@Repository

// Class to create a list
// of employees
public class CustomerRepository {

        private static CustomerDatabase list = new CustomerDatabase();

        // This static block is executed
        // before executing the main
        // block
        static {

                // Creating a few employees
                // and adding them to the list
                list.getCustomerList().add(new CustomerDto("daniel.mueller@gmail.com", "Daniel",
                                "Müller", 1, new BigDecimal("123.35")));

                list.getCustomerList().add(
                                new CustomerDto("tina.huber@gmail.com", "Tina", "Huber", 2,
                                                new BigDecimal("234.67")));

                list.getCustomerList().add(
                                new CustomerDto("daniel.traene@gmail.com", "Daniel", "Träne",
                                                3, new BigDecimal("345433.38")));

        }

        // Method to return the list
        public CustomerDatabase getAllCustomers() {

                return list;
        }

        // Method to add an employee
        // to the employees list
        public void addEmployee(CustomerDto customer) {
                list.getCustomerList()
                                .add(customer);

        }

}