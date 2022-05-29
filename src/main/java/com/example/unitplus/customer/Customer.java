package com.example.unitplus.customer;

import java.util.ArrayList;
import java.util.List;

// Class to store the list of
// all the Customers in an
// Array List
public class Customer {

    private List<Customer> customerList;

    // Method to return the list
    // of Customers
    public List<Customer> getCustomerList() {

        if (customerList == null) {

            customerList = new ArrayList<>();

        }

        return customerList;

    }

    public void setCustomerList(
            List<Customer> CustomerList) {
        this.customerList = CustomerList;
    }
}