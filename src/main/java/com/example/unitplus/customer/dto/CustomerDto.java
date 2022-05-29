package com.example.unitplus.customer.dto;

import java.math.BigDecimal;

public class CustomerDto {
    private String emailAddress;
    private String firstName;
    private String lastName;
    private Integer portfolioId;
    private BigDecimal portfolioValuation;

    public CustomerDto() {
    }

    public CustomerDto(String emailAddress, String firstName, String lastName,
            Integer portfolioId, BigDecimal portfolioValuation) {
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.portfolioId = portfolioId;
        this.portfolioValuation = portfolioValuation;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getPortfolioId() {
        return portfolioId;
    }

    public void setPortfolioId(Integer portfolioId) {
        this.portfolioId = portfolioId;
    }

    public BigDecimal getPortfolioValuation() {
        return portfolioValuation;
    }

    public void setPortfolioValuation(BigDecimal portfolioValuation) {
        this.portfolioValuation = portfolioValuation;
    }
}