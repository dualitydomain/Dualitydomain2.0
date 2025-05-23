#!/bin/bash

set -e

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Starting dependency installation..."

log "Cleaning up existing files..."
rm -rf node_modules package-lock.json

log "Clearing npm cache..."
npm cache clean --force

log "Installing dependencies..."
npm install

log "Installing specific Radix UI dependencies..."
npm install @radix-ui/react-scroll-area @radix-ui/react-select --save

log "Installing json-loader..."
npm install json-loader --save-dev

log "Installing glob package..."
npm install glob@latest --save

log "Installing critters..."
npm install critters --save

log "Listing installed packages:"
npm list --depth=0

log "Running update-dependencies script..."
bash ./update-dependencies.sh

log "Installation completed successfully"

