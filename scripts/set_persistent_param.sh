#!/bin/bash
parameter=$1
value=$2
sudo sysctl -w "$parameter=$value" >> /etc/sysctl.conf
