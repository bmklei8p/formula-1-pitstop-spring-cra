package com.formulapitstop.formulapitstop.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.formulapitstop.formulapitstop.model.DriverStanding;
import com.formulapitstop.formulapitstop.repository.DriverStandingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DriverStandingController {

    @Autowired
    DriverStandingRepository driverStandingsRepository;

    @GetMapping("/driver_standings")
    public ResponseEntity<List<DriverStanding>> getAllDriverStandings() {
        try {
            List<DriverStanding> driverStandings = new ArrayList<DriverStanding>();

            driverStandingsRepository.findAll().forEach(driverStandings::add);

            if(driverStandings.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(driverStandings, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}