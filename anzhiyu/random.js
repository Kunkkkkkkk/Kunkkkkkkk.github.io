var posts=["2025/03/13/macOS显示文件已损坏，但是在隐私设置里没有信任的方法/","2025/03/13/使用picgo用github部署图床/","2025/03/14/使用ssh反向隧道进行内网穿透（实例：open webUI）/","2025/03/14/AutoSSH/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };