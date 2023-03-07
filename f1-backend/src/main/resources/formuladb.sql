CREATE table tracks
(
	id BIGINT NOT NULL UNIQUE,
	officialName VARCHAR(255),
	standardName VARCHAR(255),
	currSeasonDate DATE NOT NULL,
	lapRecordTime VARCHAR(255),
	trackPhotosList
	PRIMARY KEY(id)
);
