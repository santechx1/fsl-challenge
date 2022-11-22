#!/bin/bash

cd infra
npm install
npm cdk deploy -- --require-approval never
