const videos = document.querySelectorAll("[data-video]");

videos.forEach((video) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      }, { threshold: 0.5 })

      observer.observe(video)
});