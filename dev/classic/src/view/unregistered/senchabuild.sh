#!/bin/bash
cd ../../../..
sencha app build
sudo cp -r build/production/* ../
cd classic/src/view/unregistered