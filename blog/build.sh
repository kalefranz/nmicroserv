VERSION=0.1.1
services='comments event-bus moderation posts query'
for service in $services
do
	cd $service
	docker image build -t kalefranz/$service:$VERSION .
	cd ..
done
