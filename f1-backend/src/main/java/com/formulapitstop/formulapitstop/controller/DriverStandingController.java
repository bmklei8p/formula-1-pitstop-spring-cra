package com.formulapitstop.formulapitstop.controller;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.formulapitstop.formulapitstop.repository.DriverStandingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DriverStandingController {

    private static final String API_URL = "http://ergast.com/api/f1/current/driverStandings.json";

    @Autowired
    DriverStandingRepository driverStandingsRepository;

    @GetMapping("/driver_standings")
    public List<DriverStanding> getAllDriverStandings() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        Object[] response = restTemplate.getForObject(API_URL, Object[].class);
        // List<DriverStanding> driverStandings = new ArrayList<>();
        // if (response.getBody() != null) {
        //     for (DriverStandingResponse driverStandingResponse : response.getBody().getDriverStandings()) {
        //         driverStandings.add(new DriverStanding(
        //                 driverStandingResponse.getPosition(),
        //                 driverStandingResponse.getDriver().getGivenName(),
        //                 driverStandingResponse.getDriver().getFamilyName(),
        //                 driverStandingResponse.getPoints()
        //         ));
        //     }
        // }
        ObjectMapper mapper = new ObjectMapper();
        String jsonResponse = mapper.writeValueAsString(response);
        System.out.println(jsonResponse);
        System.out.println("hello?");
        // List<DriverStanding> result = response.getDriverStandings() != null ? response.getDriverStandings() : new ArrayList<>();
        List<DriverStanding> result = new ArrayList<>();
        return result;
    }

    public static class DriverStandingsResponse {
        private List<DriverStanding> driverStandings;

        public List<DriverStanding> getDriverStandings() {
            return driverStandings;
        }

        public void setDriverStandings(List<DriverStanding> driverStandings) {
            this.driverStandings = driverStandings;
        }
    }
    public static class DriverStandingResponse {
        private int position;
        private DriverResponse driver;
        private int points;

        public int getPosition() {
            return position;
        }

        public void setPosition(int position) {
            this.position = position;
        }

        public DriverResponse getDriver() {
            return driver;
        }

        public void setDriver(DriverResponse driver) {
            this.driver = driver;
        }

        public int getPoints() {
            return points;
        }

        public void setPoints(int points) {
            this.points = points;
        }
    }

    public static class DriverResponse {
        private String givenName;
        private String familyName;
        private String constructor;

        public String getConstructor() {
            return constructor;
        }

        public void setConstructor(String constructor) {
            this.constructor = constructor;
        }

        public String getGivenName() {
            return givenName;
        }

        public void setGivenName(String givenName) {
            this.givenName = givenName;
        }

        public String getFamilyName() {
            return familyName;
        }

        public void setFamilyName(String familyName) {
            this.familyName = familyName;
        }
    }

    public static class DriverStanding {
        private int position;
        private String driverName;
        private int points;

        public DriverStanding(int position, String givenName, String familyName, int points) {
            this.position = position;
            this.driverName = givenName + " " + familyName;
            this.points = points;
        }

        public int getPosition() {
            return position;
        }

        public void setPosition(int position) {
            this.position = position;
        }

        public String getDriverName() {
            return driverName;
        }

        public void setDriverName(String driverName) {
            this.driverName = driverName;
        }

        public int getPoints() {
            return points;
        }

        public void setPoints(int points) {
            this.points = points;
        }
    }

}