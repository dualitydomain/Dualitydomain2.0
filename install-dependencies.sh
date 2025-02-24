#!/bin/bash

# Remove existing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Install dependencies with --legacy-peer-deps
npm install --legacy-peer-deps

# If the above fails, try with --force
if [ $? -ne 0 ]; then
  echo "Installation with --legacy-peer-deps failed. Trying with --force..."
  npm install --force
fi

