package com.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.Sale;
import com.demo.services.SaleService;

@RestController
@RequestMapping("sale")
public class SaleController {
    
    @Autowired
    private SaleService saleService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Sale getSaleById(@PathVariable(name =  "id") String id){
        return saleService.getSaleById(id);
    }
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Sale> getAllSale(){
        return saleService.getAllSale();
    }
    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Sale createSale(@RequestBody Sale sale){
        return saleService.createSale(sale);
    }
    @RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Sale updateSale(@RequestBody Sale sale){
        return saleService.uptadeSale(sale);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteSale(@PathVariable(name = "id") String id){
        saleService.deleteSale(id);
    }
}
