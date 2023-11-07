#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Demoday3CicdPipelineStack } from '../lib/demoday3-cicd-pipeline-stack';

const app = new cdk.App();
new Demoday3CicdPipelineStack(app, 'Demoday3CicdPipelineStack', {
  env: {
    account: '160437269030',
    region: 'us-east-1',
  }
});

app.synth();