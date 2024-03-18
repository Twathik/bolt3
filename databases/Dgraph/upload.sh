pwd
curl --location --request POST 'http://localhost:8080/admin/schema' \
--header 'Content-Type: application/octet-stream' \
--data-binary '@/Users/mac/Desktop/Projects/Bolt2.3/Dgraph/@schema.graphql'