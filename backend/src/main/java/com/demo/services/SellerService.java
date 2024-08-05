package com.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.stereotype.Service;

import com.demo.models.Seller;

@Service
public class SellerService {
    private Logger logger = Logger.getLogger(SellerService.class.getName());

    public Seller createSeller(Seller seller) {
        logger.info("Creting seller");
        return seller;
    }

    public Seller uptadeSeller(Seller seller) {
        logger.info("Updating seller");
        return seller;
    }

    public void deleteSeller(String id) {
        logger.info("Deleting seller with id: " + id);
    }

    public Seller getSellerById(String id) {
        logger.info("Mocking seller with id: " + id);
        Seller seller = new Seller();
        seller.setId(Long.parseLong(id));
        seller.setName("Julia Martins");
        return seller;
    }

    public List<Seller> getAllSeller() {
        logger.info("Mocking sellers and returning them");
        List<Seller> sellers = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            Seller seller = new Seller();
            seller.setId(new Long(i));
            seller.setName("Generic Name " + i);
            sellers.add(seller);
        }
        return sellers;
    }
}
