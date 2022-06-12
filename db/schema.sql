DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS specifics;


CREATE TABLE products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    anime VARCHAR(50),
    price NUMBER NOT NULL,
    -- need add CONSTRAINT to relate specifics.
);

CREATE TABLE specifics (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    material VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

