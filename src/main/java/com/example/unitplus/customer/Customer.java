package com.example.unitplus.customer;

import java.util.ArrayList;
import java.util.List;

import com.example.unitplus.customer.dto.CustomerDto;

// Class to store the list of
// all the Customers in an
// Array List
public class Customer {

    private List<CustomerDto> customerList;

    // Method to return the list
    // of Customers
    public List<CustomerDto> getCustomerList() {

        if (customerList == null) {
            customerList = new ArrayList<>();
        }

        return customerList;

    }

    public void setCustomerList(
            List<CustomerDto> CustomerList) {
        this.customerList = CustomerList;
    }
}