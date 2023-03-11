package com.formulapitstop.formulapitstop.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "driver_standings")
public class DriverStanding {
    @Id
    @Column(name = "position", nullable = false)
    private Integer position;

    @Column(name = "givenName", nullable = false)
    private String givenName;

    @Column(name = "familyName", nullable = false)
    private String familyName;

    @Column(name = "points", nullable = false)
    private Integer points;

    @Column(name = "constructor", nullable = false)
    private String constructor;

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
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
    // public String getDriverName() {
    //     return driverName;
    // }

    // public void setDriverName(String driverName) {
    //     this.driverName = driverName;
    // }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    @Override
    public String toString() {
        return "DriverStandings [position=" + position + ", points=" + points + "]";
    }

    public String getConstructor() {
        return constructor;
    }

    public void setConstructor(String constructor) {
        this.constructor = constructor;
    }
}
