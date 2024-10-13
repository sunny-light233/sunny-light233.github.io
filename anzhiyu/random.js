var posts=["2024/10/12/HTML元信息/","2024/10/12/hello-world/","2024/10/12/HTML文本处理/","2024/10/12/HTML简单概述/","2024/10/12/HTML/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };