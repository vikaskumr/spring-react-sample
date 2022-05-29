package com.example.unitplus.customer.storage;

// import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.example.unitplus.customer.dto.CustomerDto;

public class CustomerDatabase {
        private List<CustomerDto> customerList;

        // Method to return the list
        // of employees
        public List<CustomerDto> getCustomerList() {

                if (customerList == null) {

                        customerList = new ArrayList<>();

                }

                return customerList;

        }

        public void setCustomerList(
                        List<CustomerDto> employeeList) {
                this.customerList = employeeList;
        }
}