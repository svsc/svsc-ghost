FROM ghost:latest

# Create a directory for persistent storage that matches Dokku's mount point
#RUN mkdir -p /var/lib/ghost/content && \
#    chown node:node /var/lib/ghost/content

# Switch to non-root user
#USER node

COPY config.production.json /var/lib/ghost/config.production.json

# Expose the Ghost port
EXPOSE 2368:80

# Use the default Ghost entrypoint and CMD