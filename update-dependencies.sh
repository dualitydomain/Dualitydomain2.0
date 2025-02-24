#!/bin/bash

set -e

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Starting dependency update..."

log "Updating dependencies..."
npm update

log "Listing updated packages:"
npm list --depth=0

log "Update completed successfully"

