#!/bin/bash
sysctl -a |
	while IFS= read -r line
	do
		echo "$line" | tr -d =	
	done