package com.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.Seller;
import com.demo.services.SellerService;

@RestController
@RequestMapping("seller")
public class SellerController {
    
    @Autowired
    private SellerService sellerService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Seller getSellerById(@PathVariable(name =  "id") String id){
        return sellerService.getSellerById(id);
    }
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Seller> getAllSeller(){
        return sellerService.getAllSeller();
    }
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Seller createSeller(@RequestBody Seller seller){
        return sellerService.createSeller(seller);
    }
    @RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Seller updateSeller(@RequestBody Seller seller){
        return sellerService.uptadeSeller(seller);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSeller(@PathVariable(name = "id") String id){
        sellerService.deleteSeller(id);
    }
}
