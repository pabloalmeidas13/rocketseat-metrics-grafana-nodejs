docker run -d \
    -p 9090:9090 \
    -v /Users/pablo/Wevo/lab/github/wevo-rocketseat-grafana-nodejs/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus