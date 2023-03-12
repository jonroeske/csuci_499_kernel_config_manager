#!/bin/bash
username=$1
password=$2
username_check=$(/usr/bin/getent passwd "$username")
if [ "$username_check" == *"$username"* ]; then
    password_check=$(/usr/bin/su "$username" -c 'echo' <<< "$password")
    if [ "$password_check" == "" ]; then
        echo '1';
	exit;
    fi
else
    echo '0';
    exit;
fi
