# Kernel Config Manager
## CSUCI Spring 2023 COMP 499 Capstone Project 
By Jon Roeske, Evan Miller and Huey Hsu

## Reference Material
- https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/configuring-kernel-parameters-at-runtime_managing-monitoring-and-updating-the-kernel
- https://expressjs.com/
- https://reactjs.org/docs/getting-started.html

## Requirements
- Linux host
- /etc/sudoers is updated to allow any command to run
- root permissions (scripts are owned by root:root)
- node.js 14.x.x or higher

## Installation
- Clone Github Repo
- cd csuci_499_kernel_config_manager/frontend/kernel_config_manager
- npm run dev
- Webapp will be accessible at localhost:3001

## Usage
- Credentials are stored hashed at scripts/login.json
- User can either register from frontend, or manually add hashed credentials to the json file
- Upon login, user will see all kernel paramaters and their values load
- NOTE: Updating a value to runtime means the value will be reverted upon reboot, persistent will keep the updated value even after reboot
