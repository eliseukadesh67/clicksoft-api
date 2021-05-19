FROM postgres:alpine
COPY create.sql /docker-entrypoint-initdb.d/init.sql
ENV POSTGRES_PASSWORD=postgres
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["docker-entrypoint.sh", "postgres"]
