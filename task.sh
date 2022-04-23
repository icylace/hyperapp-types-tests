#!/usr/bin/env bash

update_json() {
  local filter="$1"
  local file="$2"
  local tmp="$(mktemp)"

  if [ ! -f "$file" ] ; then
    echo '{}' > "$file"
  fi

  jq "$filter" "$file" > "$tmp" && mv -f "$tmp" "$file"
}

# ------------------------------------------------------------------------------

task:index() {
  local tasks=(
    'reset'
    'test'
  )

  echo "Available tasks:"

  for task in ${tasks[@]} ; do
    echo -e "\t$task"
  done
}

# ------------------------------------------------------------------------------

task:reset() {
  echo
  echo "Reinstalling dependencies..."

  rm ./package-lock.json
  rm -fr ./node_modules

  update_json '.dependencies = {} | .devDependencies = {}' ./package.json

  local dev_modules=()

  # Language
  dev_modules+=('typescript')
  dev_modules+=('@definitelytyped/dtslint')

  npm install --save-dev "${dev_modules[@]}"

  local modules=()

  modules+=('hyperapp')

  npm install --save "${modules[@]}"
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
