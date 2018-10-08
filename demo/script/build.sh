#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/../;
npm run build;
cd ${DIR};
node gp-publish.js;
