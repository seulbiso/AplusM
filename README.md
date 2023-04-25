
# 프로젝트 개요
LLM(Large Language Model)을 활용한 서비스 구성

# 아키텍쳐


# docker 실행
./run_docker.sh

# source tree
```text
/APLUSM
    - /db
        - /conf.d
        - /data
        - /initdb.d
        - Dockerfile
    - /flask
        - /apps
        - /static
        - /templates
        - app.py
        - config.json
        - config_model.json
        - config.py
        - Dockerfile
        - requirements.txt
    - /nginx
        - default.conf
        - nginx.conf
        - Dockerfile
    - /redis
        - /conf.d
        - /data
        - Dockerfile
    - docker-compose.yml
    - run_docker.sh
    - .env
    - .dockerignore
    - .gitignore
    - README.md
```





