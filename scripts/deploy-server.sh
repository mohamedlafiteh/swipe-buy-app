#!/bin/bash

echo "Deploying Server to Heroku 🚀"

git subtree push --prefix server heroku-server master
