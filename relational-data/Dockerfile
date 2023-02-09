FROM postgres:14.1-bullseye
COPY formuladb.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
