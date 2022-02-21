VERSION=0.0.10
services='client comments event-bus moderation posts query'
for service in $services
do
	cd $service
	docker image build -t kalefranz/$service:$VERSION .
	cd ..
done
