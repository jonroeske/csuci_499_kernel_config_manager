#!/bin/bash
tunable_class=$1
ls -l /proc/sys/"$tunable_class" | cut -d ' ' -f9