package com.demo.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.stereotype.Service;

import com.demo.models.Sale;

@Service
public class SaleService {
    private Logger logger = Logger.getLogger(SaleService.class.getName());

    public Sale createSale(Sale sale) {
        logger.info("Creting sale");
        return sale;
    }

    public Sale uptadeSale(Sale sale) {
        logger.info("Updating sale");
        return sale;
    }

    public void deleteSale(String id) {
        logger.info("Deleting sale with id: " + id);
    }

    public Sale getSaleById(String id) {
        logger.info("Mocking sale with id: " + id);
        Sale sale = new Sale();
        sale.setAmount(120.00);
        sale.setDate(LocalDate.now());
        sale.setDeals(2);
        sale.setVisited(2);
        sale.setId(Long.parseLong(id));
        return sale;
    }

    public List<Sale> getAllSale() {
        logger.info("Mocking Sales and returning them");
        List<Sale> Sales = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            Sale sale = new Sale();
            sale.setId(new Long(i));
            sale.setAmount(120.00);
            sale.setDate(LocalDate.now());
            sale.setDeals(2);
            sale.setVisited(2);

            Sales.add(sale);
        }
        return Sales;
    }
}
