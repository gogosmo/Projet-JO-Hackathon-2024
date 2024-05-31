# syntax=docker/dockerfile:1.4
FROM --platform=$BUILDPLATFORM python:3.12-slim AS builder

WORKDIR /src
COPY requirements.txt /src
RUN pip install --upgrade pip setuptools
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt
RUN pip install keras
COPY . .

CMD ["python3", "run.py"]

FROM builder as dev-envs

RUN <<EOF
apk update
apk add git
EOF

RUN <<EOF
addgroup -S docker
adduser -S --shell /bin/bash --ingroup docker vscode
EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["python3", "run.py"]