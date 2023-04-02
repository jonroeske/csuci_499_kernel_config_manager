# Kernel Config Manager
## CSUCI Spring 2023 COMP 499 Capstone Project 
By Jon Roeske, Evan Miller and Huey Hsu

## Reference Material
- https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/configuring-kernel-parameters-at-runtime_managing-monitoring-and-updating-the-kernel
- https://expressjs.com/
- https://react.semantic-ui.com/
- https://reactjs.org/docs/getting-started.html

## Requirements
- Linux host
- /etc/sudoers is updated to allow any command to run
- Access to root permissions
- Node.js 14.x.x or higher

## Installation
- add the following line to /etc/sudoers:
- NOTE: This is technically not required, however setting persistent parameters won't work without this step
- sudo vi /etc/sudoers 
- your_username ALL=(ALL:ALL) NOPASSWD:ALL
- NOTE: These following few steps are for the apt package manager with Ubuntu/Debian based distros. Use equivalent steps with other distros.
- sudo apt update
- sudo apt install curl -y
- curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
- sudo apt -y install nodejs (or equivalent for installing Node 14.x.x)
- sudo apt install git -y
- git clone https://github.com/jonroeske/csuci_499_kernel_config_manager.git
- cd csuci_499_kernel_config_manager/frontend/kernel-config-manager
- npm install
- npm run dev
- webapp will be accessible at localhost:3001

## Usage
- Credentials are stored hashed at scripts/login.json (preconfigured credentials are root/test)
- User can either register from frontend, or manually add hashed credentials to the json file
- Upon login, user will see all kernel parameters and their respective values load
- NOTE: Updating a value to runtime means the value will be reverted upon reboot, persistent will keep the updated value even after reboot
