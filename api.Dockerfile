FROM python:3.8-slim-buster

WORKDIR /src

COPY react_dashboard_app/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["python3", "api.py"]
