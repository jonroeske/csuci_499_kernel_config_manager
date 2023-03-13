#!/bin/bash
username=$1
password=$2
username_check=$(/usr/bin/getent passwd "$username")
if [ "$username_check" != "" ]; then
    sudo -k
    if [ sudo -lS &> /dev/null << "$password" ]; then
        echo '1';
    fi
else
    echo '0';
fi
