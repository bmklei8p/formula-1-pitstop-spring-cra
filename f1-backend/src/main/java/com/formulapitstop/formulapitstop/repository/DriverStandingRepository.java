package com.formulapitstop.formulapitstop.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.formulapitstop.formulapitstop.model.DriverStanding;

public interface DriverStandingRepository extends JpaRepository<DriverStanding, Integer>{
    List<DriverStanding> findByPosition(Integer position);
}
