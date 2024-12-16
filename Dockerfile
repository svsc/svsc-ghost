FROM ghost:latest

# Create a directory for persistent storage that matches Dokku's mount point
RUN ls -lsah /var/lib && whoami && \
    mkdir -p /var/lib/ghost/content && \
    chown node:node /var/lib/ghost/content

# Switch to non-root user
USER node

# Expose the Ghost port
EXPOSE 2368

# Use the default Ghost entrypoint and CMD