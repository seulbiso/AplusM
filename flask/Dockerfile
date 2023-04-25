FROM python:3.8-slim


# flask의 작업 위치가 /app이라는 뜻
WORKDIR /app

# 현재 디렉토리의 모든 파일들을 컨테이너의 /app 디렉토리에 복사한다.
ADD . /app


RUN pip install -r requirements.txt

# CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]