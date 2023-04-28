FROM python:3.8-slim


# flask의 작업 위치가 /app이라는 뜻
WORKDIR /app

# 현재 디렉토리의 모든 파일들을 컨테이너의 /app 디렉토리에 복사한다.
ADD . /app

# Install gnupg2 and import GPG keys for Ubuntu package repository
RUN apt-get update && \
    apt-get install -y gnupg2 && \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32 871920D1991BC93C

# Add main repository to sources list
RUN echo "deb http://archive.ubuntu.com/ubuntu/ focal main" >> /etc/apt/sources.list

RUN apt-get update
RUN apt-get install -y libmysqlclient-dev build-essential
 
RUN pip install -r requirements.txt

# CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]
