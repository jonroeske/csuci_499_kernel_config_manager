#!/bin/bash
tunable_class=$1
parameter=$2
value=$3
sysctl "$tunable_class.$parameter=$value"