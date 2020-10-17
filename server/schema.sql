DROP DATABASE IF EXISTS productdetailsdb;

CREATE DATABASE productdetailsdb;

\c productdetailsdb;
/*mater table that contains the ulk of product detail informaiton*/
CREATE TABLE IF NOT EXISTS productinfo (
product_id SERIAL PRIMARY KEY,
productname VARCHAR(50),
slogan VARCHAR(50),
productdescription VARCHAR(100),
category VARCHAR(50),
default_price VARCHAR(50),
);

/*featrures table references the product_id so that features only get assigned to correct product*/
CREATE TABLE IF NOT EXISTS features (
featureid SERIAL PRIMARY KEY,
featureproduct integer REFERENCES productinfo(product_id),
feature VARCHAR(50),
feature_value VARCHAR(50)
);

/*styles table references product_id so that certain styles are only assiciated with certian products*/
CREATE TABLE IF NOT EXISTS styles (
style_id SERIAL PRIMARY KEY
productstyle integer REFERENCES productinfo(product_id),
style_name VARCHAR(50),
original_price VARCHAR(50),
default BOOLEAN

);


/*photos and skus reference the styles table */
CREATE TABLE IF NOT EXISTS photos (
photoid SERIAL PRIMARY KEY
phto_style integer REFERENCES styles(style_id),
photo_url VARCHAR(100),
thumbnail_url VARCHAR(100)
);

/*photos and skus reference the styles table */
CREATE TABLE IF NOT EXISTS skus (
sku_id integer SERIAL PRIMARY KEY
sku_style integer REFERENCES styles(style_id),
XS integer,
S integer,
M integer,
L integer,
XL integer,
XXL integer,
7 integer,
8 integer,
9 integer,
10 integer,
11 integer,
12 integer,
7.5 integer,
8.5 integer,
9.5 integer,
10.5 integer,
11.5 integer

);

/*cart has a unique id which should represent the user sessions, should only need to reference the product_ids that the user adds to cart*/
CREATE TABLE IF NOT EXISTS cart (
sessionid SERIAL PRIMARY KEY
prod_id integer REFERENCES productinfo(product_id),
);

/*ratings should reference the product_id that people are leaving reviews for*/
CREATE TABLE IF NOT EXISTS ratings (
ratingid SERIAL PRIMARY KEY
rating_product integer REFERENCES productinfo(product_id),
one integer,
two integer,
three integer,
four integer,
five integer
);

INSERT INTO productinfo values('green shoes', 'the best shoes', 'made of carbon', 'shoes', '140');
INSERT INTO features values ('soles', 'tin');
