---
id : doc6
title :High-Level Model
sidebar_label : High-Level Model
---






Please see the [**Data Flow**](https://docs.google.com/document/d/1jGfc2eXvToRL9anzosTLQ4zJ7fdFxMGfaiDv2BYHEvw/edit#bookmark=id.zd4odd3bobfq) for a better understanding of the propagation of data from the above modules

**Brief description:**
- **docs:** This directory would contain all the related documents to the project. It will also support the project documentation for general users.
- **examples:** This would contain use-case examples of benchroutes. This may also include native CLI examples if we plan to have a cli version as well.

- **scripts:** All shell and bash scripts related to setting up, building, execution or testing would be present in this directory. This would ease the   development process.

- **src:** This is the main directory that contains the development code. Majority of the development process would take place here.

- **lib:** This directory will be responsible for the core implementation of ideas in golang. 

- **service:** Or in other words, server. This directory would contain all server related stuff like routes, controllers, etc., which would run as a [daemon](https://en.wikipedia.org/wiki/Daemon_%28computing%29)

- **tsdb:** Directory implementing the time-series database specific to bench-routes.
