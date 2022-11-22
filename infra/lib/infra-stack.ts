import { aws_ecr as ecr, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apprunner from '@aws-cdk/aws-apprunner-alpha';

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    new apprunner.Service(this, 'fsl-apprunner', {
      source: apprunner.Source.fromEcr({
        imageConfiguration: { port: 80, environment: { MY_SECRET: "On3H1torL3sS"} },
        repository: ecr.Repository.fromRepositoryName(this, 'fsl-repo', 'fsl-challenge'),
        tagOrDigest: 'latest',
      }),
    });
  }
}
