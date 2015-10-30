FROM nginx
COPY nginx-Configuration/nginx.conf /etc/nginx/conf.d/52.20.31.137.conf
COPY Youtube-Channel-Search-Static/web.browser /home/
