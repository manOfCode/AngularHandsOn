#!/bin/bash

rm -rf /Applications/XAMPP/xamppfiles/htdocs/my-app 
cp -R /Users/svenkatr/Perforce/svenkatr_blr-mps1f_1099/sandbox/svenkatr/AngularHandsOn/my-app/ /Applications/XAMPP/xamppfiles/htdocs/my-app/
rm -rf /Applications/XAMPP/xamppfiles/htdocs/standalone-trial
cp -R /Users/svenkatr/Perforce/svenkatr_blr-mps1f_1099/sandbox/svenkatr/AngularHandsOn/standalone-trial/ /Applications/XAMPP/xamppfiles/htdocs/standalone-trial/
