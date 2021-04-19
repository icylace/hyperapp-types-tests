#!/usr/bin/env bash

task:index() {
  local tasks=(
    'clean'
    'reset'
    'test'
  )

  echo "Available tasks:"

  for task in ${tasks[@]} ; do
    echo -e "\t$task"
  done
}

# ------------------------------------------------------------------------------

task:clean() {
  echo
  echo "Cleaning the distribution folder..."
  rm -fr ./dist && mkdir ./dist
}

# ------------------------------------------------------------------------------

# From `webdev-scaffolding`.
update_json() {
  local filter="$1"
  local file="$2"
  local tmp="$(mktemp)"

  if [ ! -f "$file" ] ; then
    echo '{}' > "$file"
  fi

  jq "$filter" "$file" > "$tmp" && mv -f "$tmp" "$file"
}

task:reset() {
  echo
  echo "Resetting dependencies..."

  rm ./package-lock.json
  rm -fr ./node_modules

  update_json '.dependencies = {} | .devDependencies = {}' ./package.json

  npm install --save typescript dtslint hyperapp

  task:clean
}

# ------------------------------------------------------------------------------

task:test() {
  npx dtslint
}

# ------------------------------------------------------------------------------

if [ -z "$1" ] ; then
  task:index
  exit 1
fi

"task:$1"
