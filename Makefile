# ── Variables ────────────────────────────────────────────────────────────────
export PUID := $(shell id -u)
export PGID := $(shell id -g)

RUN := docker compose run --rm spotdl

# ── Aide ─────────────────────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  make song     URL=https://open.spotify.com/track/...   → télécharge une chanson"
	@echo "  make playlist URL=https://open.spotify.com/playlist/... → télécharge une playlist"
	@echo "  make album    URL=https://open.spotify.com/album/...    → télécharge un album"
	@echo "  make artist   URL=https://open.spotify.com/artist/...   → télécharge un artiste"
	@echo "  make sync     FILE=ma_playlist.spotdl                   → sync une playlist déjà sauvegardée"
	@echo "  make pull                                               → met à jour l'image Docker"
	@echo ""

# ── Commandes ────────────────────────────────────────────────────────────────
pull:
	docker compose pull

song:
	$(RUN) download $(URL)

playlist:
	$(RUN) download $(URL)

album:
	$(RUN) download $(URL)

artist:
	$(RUN) download $(URL)

# Sync : recompare la playlist Spotify et télécharge les nouvelles chansons
sync:
	$(RUN) sync $(FILE) --save-file $(FILE)

# Format MP3 explicitement (par défaut spotDL utilise MP3 déjà)
mp3:
	$(RUN) download $(URL) --format mp3 --bitrate 320k

.PHONY: help pull song playlist album artist sync mp3
