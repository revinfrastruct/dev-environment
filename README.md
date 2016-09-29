# revinfrastruct dev environment

The goal of this repository is to quickly enable anyone to start hacking on all of our projects in a common environment. Simply run `docker-compose up` to get everything working. This will download and instantiate an nginx-based reverse-proxy entrypoint as well as all of our projects. To add new repos, create a pull request adding the correct repo/container settings to `docker-compose.yml`

All development of the actual services will of course take place in their respective repositories.

### Resources:
- https://www.docker.com/
- https://github.com/docker/compose

### Some non-obvious caveats
- `docker-compose up` caches your latest docker build, so any changes to the build needs to run through `docker-compose build` first
- Make sure your container runs its service in foreground, or it might exit early and be unavailable to other services
