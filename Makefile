install: # подгрузить зависимости
	npm ci

brain-games: # начало игры
	node bin/brain-games.js

publish:
	npm publish --dry-run