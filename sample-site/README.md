# revinfrastruct sample site

This folder is meant to emulate a revinfrastruct project or service in order to
show a possible structure for how they might be set up.  

In this case, the site is a node.js app based on the Express framework, exposed
on port 3000. To get it up and running by itself, simply run the following:
```
docker build -t samplesite /path/to/Dockerfile
docker run -p 3000:3000 samplesite
```
This will build a new image with the tag "samplesite", and then run a container
based on it, publishing port 3000.
