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
OUTPUT="posts.csv"
FILEPATH="$DIR/$OUTPUT"
# if parameter 1 is not passed as argument default records to be generated to 1000000
LINES=${1:-10000}

### Import Our Database ###
# Dont specify a database since CREATE DATABASE is in schema.sql
#psql -f schema.sql -h 127.0.0.1 -p 5432 -U postgres
SCHEMA="$DIR/schema.sql"
#psql -f $SCHEMA -h 127.0.0.1 -p 5432 -U $USER
psql -U $USER < $SCHEMA

### Run Our Generator Script ###
node generator.js --output=$FILEPATH --lines=$LINES

### Import Our posts.csv file to seed Database ###
psql -U $USER -d $DATABASE -c "COPY $DATABASE FROM '$FILEPATH' CSV HEADER";
echo 'hello world'
