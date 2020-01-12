## nignx 

### load balancer 
http://nginx.org/en/docs/http/load_balancing.html

https://docs.nginx.com/nginx/admin-guide/load-balancer/http-health-check/

### config 
1. root path, sub path append 
+ https://www.techcoil.com/blog/understanding-the-difference-between-the-root-and-alias-directives-in-nginx/

2. alias, find desired resource in target path. 

### Cache 
1. Put generated static resource on cache, later access by cache hit to improve the performance. 
```bash
server { 
    proxy_cache_path  /data/nginx/cache  levels=1:2  keys_zone=my_cache:100m inactive=6h  max_size=10g use_temp_path=off; 

    location / {
            proxy_set_header       Host $host;
            proxy_buffering        on;
            proxy_cache            my_cache;
            proxy_cache_valid      200  6h;
            proxy_cache_use_stale  error timeout invalid_header updating http_500 http_502 http_503 http_504;
            proxy_cache_key        $uri$is_args$args;
     
            proxy_cache_revalidate on;
      #      proxy_cache_min_uses 3;
       #     proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
            proxy_cache_background_update on;
            proxy_cache_lock on;
    
    }
}
```


2. Purge the cache, when you verify your change. 
+ Free version module, you guys need to build by yourself.  
  + http://labs.frickle.com/nginx_ngx_cache_purge/  
  + https://github.com/FRiCKLE/ngx_cache_purge/ 
  
+ 无缝升级为nginx添加ngx_cache_purge模块  
  + https://www.feiqy.com/install-ngx_cache_purge-module/
    ```bash
    CentOS 7 环境，make upgrade行不得 启动命令 systemctl start nginx 不工作，make install 到另外一个目录可行。
    ```

3. Dues to cache layer exist, remember any operation later on must do purge at first.     
 
### Rewrite rule 
+ https://www.nginx.com/blog/creating-nginx-rewrite-rules/
  
 
