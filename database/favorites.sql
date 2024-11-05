CREATE TABLE favorites (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL,
    roverName VARCHAR NOT NULL,
    imgSrc VARCHAR NOT NULL,
    earthDate VARCHAR NOT NULL,
    sol INTEGER NOT NULL,
    cameraName VARCHAR NOT NULL,
    cameraFullName VARCHAR NOT NULL
);