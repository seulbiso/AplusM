FROM python:3.8-slim

ENV APP_NAME=FlaskAPP
ENV PYTHONUNBUFFERED=1

# The working directory for Flask is /app.
WORKDIR /app

# Install gnupg2 and import GPG keys for Ubuntu package repository
RUN apt-get update && apt-get install -y gnupg2 && \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32 871920D1991BC93C

# Add main repository to sources list
RUN echo "deb http://archive.ubuntu.com/ubuntu/ focal main" >> /etc/apt/sources.list

# 최신 패키지 목록을 받고 패키지 설치를 한번에 수행합니다.
RUN apt-get update && apt-get install -y --no-install-recommends build-essential

# requirements.txt 파일만을 복사하여 캐시를 활용합니다.
COPY requirements.txt ./

# 패키지 설치를 pip 한번으로 줄입니다. 불필요한 업그레이드를 제거합니다.
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files from the current directory to the /app directory in the container.
COPY . .