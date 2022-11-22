#!/bin/bash

cd infra
npm install
npx cdk bootstrap \
    --profile 046097630868_AdministratorAccess \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
    aws://046097630868/us-east-1
npx cdk deploy
