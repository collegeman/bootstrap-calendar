#!/bin/bash
currentpath=`pwd`
rm -fr ~/bootstrap-calendar-gh-pages
git clone git@github.com:collegeman/bootstrap-calendar.git ~/bootstrap-calendar-gh-pages
cd ~/bootstrap-calendar-gh-pages
git checkout gh-pages
rm -fr ~/bootstrap-calendar-gh-pages/*
cp -R ${currentpath}/docs/* ~/bootstrap-calendar-gh-pages
rm ~/bootstrap-calendar-gh-pages/css/bootstrap-calendar.css
rm ~/bootstrap-calendar-gh-pages/js/bootstrap-calendar.js
cp -R ${currentpath}/css/* ~/bootstrap-calendar-gh-pages/css
cp -R ${currentpath}/js/* ~/bootstrap-calendar-gh-pages/js
cp -R ${currentpath}/font/* ~/bootstrap-calendar-gh-pages/font
git add -A
git commit -m "Updating docs"
git push origin gh-pages
cd ${currentpath}
rm -fr ~/bootstrap-calendar-gh-pages