#!/bin/bash

# Define variables
DOMAIN=dev.aframeworksuth.mongo.overquota.io

# renew cert
certbot renew

# combine latest letsencrypt files for mongo

# find latest fullchain*.pem
newestFull=$(ls -v /etc/letsencrypt/archive/dev.frameworks.mongo.overquota.io/fullchain*.pem | tail -n 1)
echo "$newestFull"

# find latest privkey*.pem
newestPriv=$(ls -v /etc/letsencrypt/archive/dev.frameworks.mongo.overquota.io/privkey*.pem | tail -n 1)
echo "$newestPriv"

# combine to mongo.pem
cat {$newestFull,$newestPriv} | tee /etc/ssl/mongo.pem

# set rights for mongo.pem
chmod 600 /etc/ssl/mongo.pem
chown mongodb:mongodb /etc/ssl/mongo.pem

# restart mongo
service mongod restart
