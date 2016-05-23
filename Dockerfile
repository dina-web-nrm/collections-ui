FROM nginx

# Add produciton build of Collection manager to public folder.
ADD ./dw-collection-manager/ /usr/share/nginx/html

# Set the HOST to beta-api.dina-web.net, this needs to be done in some other way
# to make the image easier to use.
RUN sed -i 's@REPLACEWITHHOST@'"https://beta-api.dina-web.net"'@g' /usr/share/nginx/html/index.html
RUN sed -i 's@REPLACEWITHAUTHHOST@'"https://beta-sso.dina-web.net"'@g' /usr/share/nginx/html/index.html

COPY nginx-conf /etc/nginx/conf.d
