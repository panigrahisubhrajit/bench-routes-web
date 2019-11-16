---
id: doc1
title: Resources and Terms
sidebar_label: Resources and Terms
---
## Resources

1. Golang  
   - Beginner level [link](https://youtu.be/SqrbIlUwR0U) (excludes goroutines)
   - Standard [link](https://youtu.be/YS4e4q9oBaU) (nearly everything)
   - Benchmarks of golang vs other languages [link](https://github.com/kostya/benchmarks)
2.  Native ping support Linux kernel [link](https://www.sanfoundry.com/10-ping-command-usage-examples-linux/)
3.  Jitter [link](https://www.pingman.com/kb/article/what-is-jitter-57.html)
4.  Run go scripts on system Ctrl+C call (or SIGINT) [link](https://stackoverflow.com/questions/11268943/is-it-possible-to-capture-a-ctrlc-signal-and-run-a-cleanup-function-in-a-defe)
5.  Socket package used in BR [link](https://github.com/googollee/go-socket.io)


## Terms
  
<p><strong>1: Route </strong></p>
       <p> Routes are paths to which a server listens or responds to, whenever the client pings (or requests) on that address. It is easy to confuse the route with the address (or URL).</p>
       <p><strong>Example</strong>:</p>
        <ul>http://192.168.22.25:8080/<strong>add_events</strong></ul>
        <ul>http://192.168.22.25:8080/<strong>remove_events</strong></ul>
       <p>Here,</p>
<p><strong>IP</strong>: 192.168.22.252</p>
<p><strong>Port</strong>: 8080</p>
<p><strong>Routes</strong>: [<strong>‘add_events’</strong>, <strong>‘remove_events’</strong>]</p>


<p><strong>2: Monitoring</strong></p>
       <p>
         Monitoring refers to the act of constantly checking and observing all the routes at particular intervals, in order to check the status of the routes. The status of the routes can be running, stop, error or warning. In case of error or warning, the admin will be notified to check for the error and the log details.</p>


<p><strong>3: tsdb</strong></p>
       <p>
       	  A time-series database (TSDB) is a database optimized for time-stamped or time-series data. Time series data are simply measurements or events that are tracked time-series and monitored. In these types of models, the data points are saved in stamps of time rather than any ID which is generally the case of SQL and NoSQL databases.
</p>
<p>
         Why do we need a time-series database?</p>

<p>
         In traditional databases, values are stored simply as rows in tables or as an object, in a document. However, the data values in this project need to be stored in every fraction of a second. The use of traditional data doesn’t seem to be convenient when it comes to storing and retrieving large amounts of data. Further, the traditional data models will increase time space and time complexity during the course of data extraction in sorted time order.</p>

  <p>  
         In a tsdb, the data is stored at a particular timestamp(at a particular instant of time) in which each record can be represented as a hash block. This block can be stored in the form of a chain of events, thereby forming a blockchain. This chain will be highly useful in making graphs on the UI end, as the time complexity of the extraction of data points would be highly optimized (since the extraction of data would follow chain propagation).</p>
<p><strong>4: Benchmark</strong></p>

<p>
         In computing, a benchmark is an act of running a computer program, a set of programs, or other operations, in order to assess the relative performance of an object, system or entity, by running a series of standard tests which are generally based on computationally expensive algorithms. Benchmarking determines the performance of the software or device.</p>
