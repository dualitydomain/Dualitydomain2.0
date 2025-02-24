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

# Verify that required dependencies are installed
if ! npm list @radix-ui/react-scroll-area >/dev/null 2>&1 || ! npm list @radix-ui/react-select >/dev/null 2>&1; then
  echo "Installing missing Radix UI dependencies..."
  npm install @radix-ui/react-scroll-area @radix-ui/react-select --force
fi

