#!/bin/bash
username=$1
password=$2
username_check=$(/usr/bin/getent passwd "$username")
if [ "$username_check" == *"$username"* ]; then
    password_check=$(/usr/bin/su "$username" -c 'echo' <<< "$password")
    if [ "$password_check" == "" ]; then
        exit 1;
    fi
else
    exit 0;
fi