#!/bin/bash

echo "Deploying the Client to Heroku 🚀"

git subtree push --prefix client heroku-client master
