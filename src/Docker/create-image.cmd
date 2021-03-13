docker build --no-cache -f SQL\Dockerfile.PostgreSql -t yetanotherproject/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t yetanotherproject/app ../..
