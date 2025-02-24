#!/bin/bash

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to handle errors
handle_error() {
    log "ERROR: $1"
    exit 1
}

# Set error handling
set -e

log "Starting dependency installation..."

# Remove existing node_modules and package-lock.json
log "Cleaning up existing files..."
rm -rf node_modules package-lock.json || handle_error "Failed to remove existing files"

# Clear npm cache
log "Clearing npm cache..."
npm cache clean --force || handle_error "Failed to clear npm cache"

# Install dependencies
log "Installing dependencies with --legacy-peer-deps..."
if ! npm install --legacy-peer-deps; then
    log "Installation with --legacy-peer-deps failed, trying with --force..."
    npm install --force || handle_error "Failed to install dependencies"
fi

# Install specific Radix UI dependencies
log "Installing Radix UI dependencies..."
npm install @radix-ui/react-scroll-area @radix-ui/react-select --save || handle_error "Failed to install Radix UI dependencies"

log "Installation completed successfully"

