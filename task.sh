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

task_index() {
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

task_reset() {
  echo
  echo "Reinstalling dependencies..."

  rm ./package-lock.json
  rm -fr ./node_modules

  update_json '.dependencies = {} | .devDependencies = {}' ./package.json

  local dev_modules=()

  # Language
  dev_modules+=('typescript')
  dev_modules+=('@definitelytyped/dtslint')

  # Linting
  # dev_modules+=('eslint')
  # dev_modules+=('@typescript-eslint/parser')
  # dev_modules+=('@typescript-eslint/eslint-plugin')
  # dev_modules+=('eslint-config-standard')
  # dev_modules+=('eslint-plugin-prettier')

  npm install --save-dev "${dev_modules[@]}"

  # Biome
  # One toolchain for your web project
  # https://biomejs.dev/
  npm install --save-dev --save-exact @biomejs/biome

  local modules=()

  modules+=('hyperapp')

  npm install --save "${modules[@]}"
}

# ------------------------------------------------------------------------------

task_test() {
  npx dtslint
}

# ------------------------------------------------------------------------------

if [ -z "$1" ] ; then
  task_index
  exit 1
fi

"task_$1"
