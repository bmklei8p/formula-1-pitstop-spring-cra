package com.formulapitstop.formulapitstop.controller;

import com.formulapitstop.formulapitstop.repository.TrackRepository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.formulapitstop.formulapitstop.model.Track;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TrackController {

    @Autowired
    TrackRepository trackRepository;

    @GetMapping("/tracks")
    public ResponseEntity<List<Track>> getAllTracks(@RequestParam(required=false) Integer id) {
        try {
            List<Track> tracks = new ArrayList<Track>();

            // if (trackId == null)
            trackRepository.findAll().forEach(tracks::add);
            // else
            //     trackRepository.findByTrackId(trackId).forEach(tracks::add);

            if(tracks.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tracks, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
