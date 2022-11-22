#!/bin/bash

cd infra
npm install
npm run cdk deploy -- --require-approval never
