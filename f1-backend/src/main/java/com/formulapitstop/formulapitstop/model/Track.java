package com.formulapitstop.formulapitstop.model;

import java.time.LocalDate;
import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tracks")
public class Track {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "officialName", nullable = false)
    private String officialName;

    @Column(name = "standardName", nullable = false)
    private String standardName;

    @Column(name = "currSeasonDate", nullable = false)
    private LocalDate currSeasonDate;

    @Column(name = "lapRecordTime", nullable = true)
    private String lapRecordTime;

    @Column(name = "trackPhotosList", nullable = true)
    private ArrayList<String> trackPhotosList;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOfficialName() {
        return officialName;
    }

    public void setOfficialName(String officialName) {
        this.officialName = officialName;
    }

    public String getStandardName() {
        return standardName;
    }

    public void setStandardName(String standardName) {
        this.standardName = standardName;
    }

    public LocalDate getCurrSeasonDate() {
        return currSeasonDate;
    }

    public void setCurrSeasonDate(LocalDate currSeasonDate) {
        this.currSeasonDate = currSeasonDate;
    }

    public String getLapRecordTime() {
        return lapRecordTime;
    }

    public void setLapRecordTime(String lapRecordTime) {
        this.lapRecordTime = lapRecordTime;
    }

    public ArrayList<String> getTrackPhotosList() {
        return trackPhotosList;
    }

    public void setTrackPhotosList(ArrayList<String> trackPhotosList) {
        this.trackPhotosList = trackPhotosList;
    }

    @Override
    public String toString() {
        return "Track [id=" + id + ", standardName=" + standardName + "]";
    }
}
