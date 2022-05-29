package com.example.unitplus.customer.controller;

import java.net.URI;
import java.util.List;
import java.util.stream.Stream;

import com.example.unitplus.customer.Customer;
import com.example.unitplus.customer.dto.CustomerDto;
import com.example.unitplus.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Import the above-defined classes
// to use the properties of those
// classes

// Creating the REST controller
@RestController
@RequestMapping(path = "/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    // Implementing a GET method
    // to get the list of all
    // the cutomers
    @GetMapping(path = "/", produces = "application/json")

    public Customer getCustomers() {

        return customerRepository
                .getAllCustomers();
    }

    // Implementing a GET method
    // to get the details of a particular customer
    @GetMapping(path = "/{portfolioId}", produces = "application/json")

    public CustomerDto getCustomerDetails(@PathVariable("portfolioId") Integer portfolioId) {

        return customerRepository
                .getCustomerDetailsById(portfolioId);
    }

}
