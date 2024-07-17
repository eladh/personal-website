---
title: Configuring Kubernet22222es with YAML
date: 2024-07-17
author: Elad Hirsch
tags: ['kubernetes', 'configuration']
timeToRead: 5
---

In this post, we will explore how to configure Kubernetes using YAML files. YAML is a human-readable data serialization standard that is commonly used for configuration files.

## Example YAML Configuration

Here is a simple example of a Kubernetes deployment configuration written in YAML:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
