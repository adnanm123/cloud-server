# Lab: AWS: Cloud Servers

## Overview

This lab involves deploying a Node.js server to AWS EC2 using Elastic Beanstalk. You have the option to choose between two server types: a simple API or web server (Option 1), or a socket.io event hub (Option 2). The server you deploy should not require a database.

## Resources

- AWS Elastic Beanstalk
- GitHub

## Feature Tasks

### Task 1: Deploy via AWS Control Panel (GUI)

1. Choose an existing server (Option 1 or Option 2) that you've built previously.
2. Create a new environment using Elastic Beanstalk from the AWS Control Panel (GUI).
3. Manually deploy your application to this environment by uploading a .zip file.

### Task 2: Deploy via Terminal (CLI)

1. Use the same server chosen in Task 1.
2. Create a new environment using Elastic Beanstalk from your terminal.
3. Manually deploy your application to this environment by using the `eb deploy` command.

## Documentation

[GUI](http://cloud-server.us-west-2.elasticbeanstalk.com/)
[CLI](http://cloud-server-cli-env.eba-qubcyz6a.us-west-2.elasticbeanstalk.com/)
