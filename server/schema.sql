DROP DATABASE IF EXISTS productdetailsdb;

CREATE DATABASE productdetailsdb;

\c productdetailsdb;
/*master table that contains the ulk of product detail informaiton*/
CREATE TABLE IF NOT EXISTS productinfo (
product_id SERIAL PRIMARY KEY,
product_name TEXT NOT NULL,
slogan TEXT,
product_description TEXT,
category TEXT,
default_price TEXT
);

/*featrures table references the product_id so that features only get assigned to correct product*/
CREATE TABLE IF NOT EXISTS features (
featureid SERIAL PRIMARY KEY,
featureproduct integer REFERENCES productinfo,
feature TEXT,
feature_value TEXT
);

/*styles table references product_id so that certain styles are only assiciated with certian products*/
CREATE TABLE IF NOT EXISTS styles (
style_id SERIAL PRIMARY KEY,
productstyle integer REFERENCES productinfo,
style_name TEXT,
original_price TEXT,
default_style integer
);


/*photos and skus reference the styles table */
CREATE TABLE IF NOT EXISTS photos (
photoid SERIAL PRIMARY KEY,
photo_style integer REFERENCES styles(style_id),
photo_url TEXT,
thumbnail_url TEXT
);

/*photos and skus reference the styles table */
CREATE TABLE IF NOT EXISTS skus (
sku_id SERIAL PRIMARY KEY,
sku_style integer REFERENCES styles,
XS integer,
S integer,
M integer,
L integer,
XL integer,
XXL integer,
seven integer,
eight integer,
nine integer,
ten integer,
eleven integer,
twelve integer,
seven_half integer,
eight_half integer,
nine_half integer,
ten_half integer,
eleven_half integer
);

/*cart has a unique id which should represent the user sessions, should only need to reference the product_ids that the user adds to cart*/
CREATE TABLE IF NOT EXISTS cart (
user_session SERIAL PRIMARY KEY,
prod_id integer REFERENCES productinfo
);

/*ratings should reference the product_id that people are leaving reviews for*/
CREATE TABLE IF NOT EXISTS ratings (
ratingid SERIAL PRIMARY KEY,
rating_product integer REFERENCES productinfo,
one integer,
two integer,
three integer,
four integer,
five integer
);

INSERT INTO productinfo(product_name, slogan, product_description, category, default_price)
VALUES('green shoes', 'the best shoes', 'made of carbon', 'shoes', '140');
INSERT INTO features(feature, feature_value)
VALUES ('soles', 'tin');
