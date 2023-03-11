CREATE table tracks
(
	id BIGINT NOT NULL UNIQUE,
	officialName VARCHAR(255),
	standardName VARCHAR(255),
	currSeasonDate DATE NOT NULL,
	lapRecordTime VARCHAR(255),
	-- trackPhotosList,
	PRIMARY KEY(id)
);

CREATE table driver_standings
(
    position INT NOT NULL UNIQUE,
    driverName VARCHAR(50)
    points INT NOT NULL,
    PRIMARY KEY(position)
)