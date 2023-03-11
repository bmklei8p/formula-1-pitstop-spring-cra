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

    @Column(name = "driverName", nullable = false)
    private String driverName;

    @Column(name = "points", nullable = false)
    private Integer points;

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    @Override
    public String toString() {
        return "DriverStandings [position=" + position + ", driverName=" + driverName + ", points=" + points + "]";
    }
}
