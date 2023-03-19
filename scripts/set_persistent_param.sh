#!/bin/bash
parameter=$1
value=$2
cp /etc/sysctl.conf /tmp/
grep -q "$parameter.*" /tmp/sysctl.conf && sed -i "s/^$parameter.*/$parameter = $value/" /tmp/sysctl.conf || echo "$parameter = $value" >> /tmp/sysctl.conf
sudo cp /tmp/sysctl.conf /etc/
sudo sysctl -p
rm -rf /tmp/sysctl.conf
