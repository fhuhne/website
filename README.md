# website

My website https://finnhuhne.de

## requirements

* docker

## build

```bash
docker build -t fhuhne/website -f docker/Dockerfile src/
```

## run

```bash
docker run -p 80:80 fhuhne/website
```
