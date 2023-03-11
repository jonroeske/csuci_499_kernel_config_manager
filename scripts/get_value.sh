#!/bin/bash
tunable_class=$1
parameter=$2
if [ "$tunable_class" != "" ]; then
    if [ "$parameter" != "" ]; then
        sysctl /"$tunable_class"/"$parameter" | cut -d '=' -f2
    fi
else
    sysctl /"$tunable_class" | cut -d '=' -f2
fi