---
id: doc3 
title: Overview, Goals and Learning
sidebar_label: Overview, Goals and Learning
---

## Overview
<p>
        Monitoring has been tough and with the increase in the routes used in any sophisticated project, the performance and metrics of an application are seriously affected. With an increase in server computational models, the probability of a complete request-response cycle without any throws is nowhere close to 1. </p>

<p>     <strong>bench-routes</strong> acts as a routes-benchmarking, monitoring, and route-network analysis tool. It monitors the routes of the application   
	    and analyses the network pipe between the server-client.</p>


## Goals

1. Benchmark route
     - Load-handling of application on the individual route.
     - Test various possibilities of data in params (Permutate params), like sending an empty param to see how the server response behaves.
2. Analyse network performance of the hosted application irrespectively of containerization
     - Network ping
     - Jitter analysis
     - Packet loss
3. Log error handling capability of the application
4. Maintain a check on server-route output and alert on changes above the threshold
5. Graphical view using ElectronJS

## Learning

1. Analysis of network-based calculations
2. Intensive use of channels (golang)
3. Familiarity with monitoring concepts
4. Time-series database(tsdb) [basic as of now]
5. Stronghold on Golang
6. Extensive use of go-subroutines
7. Simple blockchain concepts
