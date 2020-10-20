#!/bin/bash

###################################################
# Bash script to create database and seed
###################################################

# Variable Definitions
# Path to directory bash script is living
DIR="$( cd .. &&  cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Database Variable Definitions
DATABASE="productdetailsdb"
USER="postgres"

# Output Filename for Faker File
# OUTPUT="posts.csv"
# FILEPATH="$DIR/$OUTPUT"
# if parameter 1 is not passed as argument default records to be generated to 1000000
LINES=${1:-10000000}

### Import Our Database ###
# Dont specify a database since CREATE DATABASE is in schema.sql
#psql -f schema.sql -h 127.0.0.1 -p 5432 -U postgres
SCHEMA="$DIR/schema.sql"
#psql -f $SCHEMA -h 127.0.0.1 -p 5432 -U $USER
psql -U $USER < $SCHEMA

### Run Our Generator Script ###
node productGenerator.js --output=$DIR/products.csv --lines=$LINES
node featureGenerator.js --output=$DIR/features.csv --lines=$LINES
node styleGenerator.js --output=$DIR/styles.csv --lines=$LINES
node photoGenerator.js --output=$DIR/photos.csv --lines=$LINES
node skuGenerator.js --output=$DIR/skus.csv --lines=$LINES
node ratingsGenerator.js --output=$DIR/ratings.csv --lines=$LINES

### Import Our posts.csv file to seed Database ###
psql -U $USER -d $DATABASE -c "COPY productinfo FROM '$DIR/data_generation/products.csv' CSV HEADER";
psql -U $USER -d $DATABASE -c "COPY features FROM '$DIR/data_generation/features.csv' CSV HEADER";
psql -U $USER -d $DATABASE -c "COPY styles FROM '$DIR/data_generation/styles.csv' CSV HEADER";
psql -U $USER -d $DATABASE -c "COPY photos FROM '$DIR/data_generation/photos.csv' CSV HEADER";
psql -U $USER -d $DATABASE -c "COPY skus FROM '$DIR/data_generation/skus.csv' CSV HEADER";
psql -U $USER -d $DATABASE -c "COPY ratings FROM '$DIR/data_generation/ratings.csv' CSV HEADER";