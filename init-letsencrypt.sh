domains=(teplocolour.ru www.teplocolour.ru)
email="admin@teplocolour.ru"
staging=0

data_path="./certbot"
rsa_key_size=4096

if [ -d "$data_path" ]; then
  read -p "Existing data found. Continue and replace existing certificate? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi
fi

mkdir -p "$data_path/conf/live/$domains"

docker-compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1\
    -keyout '$data_path/conf/live/$domains/privkey.pem' \
    -out '$data_path/conf/live/$domains/fullchain.pem' \
    -subj '/CN=localhost'" certbot

echo "### Starting nginx ..."
docker-compose up --force-recreate -d nginx

echo "### Requesting Let's Encrypt certificate for $domains ..."
docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    --staging \
    -d ${domains[*]}" certbot

docker-compose stop nginx
docker-compose up -d
