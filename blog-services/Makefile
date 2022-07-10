dp:
	yarn start:dev posts

dq:
	yarn start:dev query

dc:
	yarn start:dev comments

de: 
	yarn start:dev event-bus

dm: 
	yarn start:dev moderation

q-img:
	docker build -f ./apps/query/Dockerfile -t seenark/query .

p-img:
	docker build -f ./apps/posts/Dockerfile -t seenark/posts .
	
m-img:
	docker build -f ./apps/moderation/Dockerfile -t seenark/moderation .

e-img:
	docker build -f ./apps/event-bus/Dockerfile -t seenark/event-bus .

c-img:
	docker build -f ./apps/comments/Dockerfile -t seenark/comments .