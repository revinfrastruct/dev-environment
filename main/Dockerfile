#Alpine Linux, because of its small size
FROM alpine:3.3
MAINTAINER https://github.com/revinfrastruct

ENV CONSULTEMPLATE_VERSION=0.15.0

RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk add --update curl runit && rm -rf /var/cache/apk/*

# Install nginx
RUN apk add --update nginx && rm -rf /var/cache/apk/*

# Download & install consul-template
RUN apk add --update zip && \
   curl -sSL https://releases.hashicorp.com/consul-template/${CONSULTEMPLATE_VERSION}/consul-template_${CONSULTEMPLATE_VERSION}_linux_amd64.zip -o /tmp/consul-template.zip && \
    unzip /tmp/consul-template.zip -d /bin && \
    rm /tmp/consul-template.zip && \
    apk del zip && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /etc/consul-template
ADD nginx.conf /etc/consul-template/nginx.conf

ADD nginx.service /etc/service/nginx/run
ADD consul-template.service /etc/service/consul-template/run
RUN chmod a+x /etc/service/nginx/run
RUN chmod a+x /etc/service/consul-template/run


CMD runsvdir /etc/service
