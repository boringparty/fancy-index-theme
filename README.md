# Minimal Fancy Theme

This is a very simple, hacky theme for [nginx's fancy index module](https://github.com/aperezdc/ngx-fancyindex).

There's an optional automatic dark theme in the stylesheet. 

![screenshot](screenshot.png?raw=true "screenshot")

Anybody who is half-decent with CSS and such can clean this up, but it works well as is.

It isn't in the screenshot, but if you had a readme.md, it'll load the basic markdown (bold, italics, links, images) below the file listing. Each folder has its own readme.md, which is handy. 

## NGINX Config

This is set for [password protected directories](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/). 

```
server {
  listen 443 ssl;
  server_name dl.domain.com;
  index index.html index.php index.htm;
  root /var/www/domain.com/dl;
  location / {
    try_files $uri $uri/ =404;
        auth_basic "Restricted Content";
        auth_basic_user_file /etc/nginx/.htpasswd;
        fancyindex on;
        fancyindex_exact_size off;
        fancyindex_css_href /assets/style.css;
        fancyindex_ignore assets secret readme.md;
        fancyindex_time_format "%b %y";
        fancyindex_header /assets/header.html;
        fancyindex_footer /assets/footer.html;
        fancyindex_show_path on;
  }
```

Enjoy!
