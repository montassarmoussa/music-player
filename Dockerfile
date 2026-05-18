# Compatible Apple Silicon (arm64) et x86 (amd64)
FROM python:3.12-slim

# Dépendances système
RUN apt-get update && apt-get install -y \
    ffmpeg \
    libc6 \
    && rm -rf /var/lib/apt/lists/*

# Installer spotDL
RUN pip install --no-cache-dir spotdl

# Créer un home accessible pour tout utilisateur (y compris UID dynamique)
RUN mkdir -p /home/spotdl/.config && chmod -R 777 /home/spotdl

ENV HOME=/home/spotdl

WORKDIR /music

ENTRYPOINT ["spotdl"]