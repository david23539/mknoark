#!/bin/sh

sed -i -e  's/assets\/icons/node_modules\/mk-noark\/fonts\/icons/g' ./dist/styles.min.css;
sed -i -e  's/assets\/fonts/node_modules\/mk-noark\/fonts\/fonts/g' ./dist/styles.min.css;
sed -i -e  's/assets\/images/node_modules\/mk-noark\/images/g' ./dist/styles.min.css;
