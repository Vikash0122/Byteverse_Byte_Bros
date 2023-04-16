function switchVideo() {
    var video = document.getElementById("my-video");
    var source = document.getElementById("my-source");
    if (source.src.endsWith("\demorealvine\pexels-kindel-media-7578550-3840x2160-30fps.mp4")) {
      source.src = "\demorealvine\pexels-rholdan-ortiz-3555398-1920x1080-30fps.mp4";
    } else {
      source.src = "\demorealvine\pexels-kindel-media-7578550-3840x2160-30fps.mp4";
    }
    video.load();
    video.play();
  }
  