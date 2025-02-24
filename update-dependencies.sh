#!/bin/bash

set -e

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Starting dependency update..."

log "Installing/updating dependencies..."
npm install inflight@latest three@latest @types/three@latest --save

log "Listing updated packages:"
npm list inflight three @types/three

log "Update completed successfully"

