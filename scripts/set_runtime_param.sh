#!/bin/bash
parameter=$1
value=$2
sysctl "$parameter=$value"
