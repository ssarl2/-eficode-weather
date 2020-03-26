#!/bin/bash

## Clean
rm -rf ./zone/*
cp -r eficode/backend eficode/frontend ./zone/
rm -rf eficode/
rm -rf changed/
rm npmi.sh

## RUN
cd zone/backend
npm run dev
