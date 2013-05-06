echo 'Building dist now...'
rm -fr ./dist
mkdir dist
mkdir dist/js
mkdir dist/css
mkdir dist/font
cp js/bootstrap-calendar.js ./dist/js
cp css/* ./dist/css
cp font/* ./dist/font
yuicompressor --preserve-semi ./dist/js/bootstrap-calendar.js > ./dist/js/bootstrap-calendar.min.js
yuicompressor --preserve-semi ./dist/css/bootstrap-calendar.css > ./dist/css/bootstrap-calendar.min.css
git add -A