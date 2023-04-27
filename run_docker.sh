echo killing old docker processes
docker-compose rm -fs

echo building docker containers
docker-compose up --build -d

echo print flask app logs
docker logs -f app
