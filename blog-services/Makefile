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
	docker build -f ./apps/query/Dockerfile -t hadesgod/query .

q-push:
	docker push hadesgod/query

p-img:
	docker build -f ./apps/posts/Dockerfile -t hadesgod/posts .
p-push:
	docker push hadesgod/posts

m-img:
	docker build -f ./apps/moderation/Dockerfile -t hadesgod/moderation .
m-push:
	docker push hadesgod/moderation

e-img:
	docker build -f ./apps/event-bus/Dockerfile -t hadesgod/event-bus .
e-push:
	docker push hadesgod/event-bus

c-img:
	docker build -f ./apps/comments/Dockerfile -t hadesgod/comments .
c-push:
	docker push hadesgod/comments

all-img:
	make q-img 
	make p-img
	make m-img
	make e-img
	make c-img

all-push:
	make q-push
	make p-push
	make m-push
	make e-push
	make c-push

