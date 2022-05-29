package com.example.unitplus.customer.controller;

import java.net.URI;
import java.util.List;

import com.example.unitplus.customer.Customer;
import com.example.unitplus.customer.dto.CustomerDto;
import com.example.unitplus.customer.repository.CustomerRepository;
import com.example.unitplus.customer.storage.CustomerDatabase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
    // the employees
    @GetMapping(path = "/", produces = "application/json")

    public Customer getEmployees() {

        return customerRepository
                .getAllCustomers();
    }

}
