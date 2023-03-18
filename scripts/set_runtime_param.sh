#!/bin/bash
parameter=$1
value=$2
sudo sysctl "$parameter=$value"
