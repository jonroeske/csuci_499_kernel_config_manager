#!/bin/bash
parameter=$1
value=$2
sysctl -w "$parameter=$value" >> /etc/sysctl.conf
