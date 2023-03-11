package com.formulapitstop.formulapitstop.repository;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.formulapitstop.formulapitstop.model.Track;

public interface TrackRepository extends JpaRepository<Track, String>{
    List<Track> findByStandardName(String standardName);
}
