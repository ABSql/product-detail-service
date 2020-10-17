CREATE DATABASE productdetailsdb;

USE productdetailsdb;
/*mater table that contains the ulk of product detail informaiton*/
CREATE TABLE IF NOT EXISTS productinfo (
product_id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
productname VARCHAR(50),
slogan VARCHAR(50),
productdescription VARCHAR(50),
category VARCHAR(50),
default_price VARCHAR(50),
);

/*featrures table references the product_id so that features only get assigned to correct product*/
CREATE TABLE IF NOT EXISTS features (
featureid integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
FOREIGN KEY (product_id) REFERENCES productinfo(product_id),
feature VARCHAR(50),
feature_value VARCHAR(50)
);

/*styles table references product_id so that certain styles are only assiciated with certian products*/
CREATE TABLE IF NOT EXISTS styles (
style_id integer AUTO_INCREMENT UNIQUE PRIMARY KEY
FOREIGN KEY (product_id) REFERENCES productinfo(product_id),
style_name VARCHAR(50),
original_price VARCHAR(50),
default BOOLEAN

);


/*photos and skus reference the styles table */
CREATE TABLE IF NOT EXISTS photos (
photoid integer AUTO_INCREMENT UNIQUE PRIMARY KEY
FOREIGN KEY (styleid) REFERENCES styles(style_id),
);

/*photos and skus reference the styles table */
CREATE TABLE IF NOT EXISTS skus (
skuid integer AUTO_INCREMENT UNIQUE PRIMARY KEY
FOREIGN KEY (styleid) REFERENCES styles(style_id),

/*
columns are not constant; sometimes are ints sometimes are sizes
just add ALL OF THE KEYS AND RETURN THE ONES THAT ARENT NULL
*/
);

/*cart has a unique id which should represent the user sessions, should only need to reference the product_ids that the user adds to cart*/
CREATE TABLE IF NOT EXISTS cart (
sessionid integer AUTO_INCREMENT UNIQUE PRIMARY KEY
FOREIGN KEY (product_id) REFERENCES productinfo(product_id),
);

/*ratings should reference the product_id that people are leaving reviews for*/
CREATE TABLE IF NOT EXISTS ratings (
ratingid integer AUTO_INCREMENT UNIQUE PRIMARY KEY
FOREIGN KEY (product_id) REFERENCES productinfo(product_id),
one integer,
two integer,
three integer,
four integer,
five integer
);