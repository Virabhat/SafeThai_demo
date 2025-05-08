const slides = [
    {
      image: "assets/images/1.webp",
      texts: [
        { content: "วันนี้อากาศร้อนมาก", delay: 1000, position: "bottom" }
      ]
    },
    {
      image: "assets/images/2.webp",
      texts: []
    },
    {
      image: "assets/images/3.webp",
      texts: [
        { content: "เดือนนี้ร้อนจริง", delay: 2000, position: "top" }
      ]
    },
    {
      image: "assets/images/5.webp",
      texts: [
        { content: "เปิดแอร์ดีกว่า", delay: 2000, position: "top" },
      ]
    },
    {
      image: "assets/images/7.webp",
      texts: [],
    },
    {
      image: "assets/images/8.webp",
      texts: [],
      duration: 1000
    },
    {
      image: "assets/images/9.webp",
      texts: [],
      duration: 1000
    },
    {
      image: "assets/images/10.webp",
      texts: [],
      duration: 1000
    },
    {
      image: "assets/images/11.webp",
      texts: []
    },
    {
      image: "assets/images/12.webp",
      texts: []
    },
    {
      image: "assets/images/13.webp",
      texts: []
    },
    {
      image: "assets/images/14.webp",
      texts: []
    },
    {
      image: "assets/images/15.webp",
      texts: []
    },
    {
      image: "assets/images/16.webp",
      texts: [
        { content: "ต้องซื้อแอร์ใหม่แล้ว", delay: 2000, position: "top" }
      ]
    },
    {
      image: "assets/images/18.webp",
      texts: []
    },
    {
      image: "assets/images/19.webp",
      texts: []
    },
    {
      image: "assets/images/20.webp",
      texts: [
        { content: "คุณเจอร้านขายเเอร์ที่ห้างใกล้ๆ", delay: 2000, position: "top" },
      ]
    },
    {
      image: "assets/images/22.webp",
      texts: []
    },
    {
      image: "assets/images/22.webp",
      texts: []
    },
    {
      image: "assets/images/26_2.webp",
      texts: [
        { content: "เเต่...", delay: 1000, position: "bottom" },
        { content: "คุณลืมอะไรไปหรือเปล่านะ?", delay: 1000, position: "bottom" }
      ]
    },
    {
      image: "assets/images/27.webp",
      duration: 8000,
      overlays: [
        {
          id: "light",
          src: "assets/elements/turn-on-light.png",
          offSrc: "assets/elements/turn-off-light.png",
          top: "6%",
          left: "9%",
          width: "162px",
          offClass: "light-off-style"
        },
        {
          id: "tv",
          src: "assets/elements/tv-open.png",
          offSrc: "assets/elements/turn-off-tv.png",
          top: "41%",
          left: "-42%",
          width: "213px",
          offClass: "tv-off-style"
        },
        {
          id: "fan",
          src: "assets/elements/turn-on-fan.png",
          offSrc: "assets/elements/turn-off-fan.png",
          top: "54%",
          left: "19%",
          width: "96px",
          offClass: "fan-off-style"
        }
      ],
      glows: [
        { id: "light", top: "6%", left: "38%" },
        { id: "tv", top: "40%", left: "7%" },
        { id: "fan", top: "64%", left: "39%" }
      ]
    }
  ];

  const container = document.getElementById("slideContainer");
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  let currentSlide = 0;
  let isImg1Active = true;

  async function showSlide(index) {
    const slide = slides[index];
    const currentImg = isImg1Active ? img1 : img2;
    const nextImg = isImg1Active ? img2 : img1;

    nextImg.src = slide.image;
    nextImg.classList.add("active");
    currentImg.classList.remove("active");
    isImg1Active = !isImg1Active;

    container.querySelectorAll(".text-overlay, .overlay, .glow-dot").forEach(el => el.remove());

    if (slide.texts && slide.texts.length > 0) {
      for (const { content, delay, position } of slide.texts) {
        container.querySelectorAll(".text-overlay").forEach(el => el.remove());

        const textDiv = document.createElement("div");
        textDiv.className = "text-overlay";
        textDiv.innerText = content;
        textDiv.classList.add(position === "top" ? "text-top" : "text-bottom");
        container.appendChild(textDiv);

        await new Promise(resolve => setTimeout(resolve, delay || 1000));
        textDiv.style.opacity = 1;

        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    }

    if (slide.overlays) {
      slide.overlays.forEach(({ id, src, offSrc, top, left, width, offClass }) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "overlay";
        img.style.top = top;
        img.style.left = left;
        img.style.width = width;
        img.dataset.id = id;
        img.dataset.offSrc = offSrc;
        img.dataset.offClass = offClass;
        container.appendChild(img);
      });
    }

    if (slide.glows) {
      slide.glows.forEach(({ id, top, left }) => {
        const dot = document.createElement("div");
        dot.className = "glow-dot";
        dot.style.top = top;
        dot.style.left = left;
        dot.dataset.target = id;

        dot.addEventListener("click", () => {
          const overlay = container.querySelector(`.overlay[data-id='${id}']`);
          if (overlay && overlay.dataset.offSrc) {
            overlay.src = overlay.dataset.offSrc;
            if (overlay.dataset.offClass) {
              overlay.classList.add(overlay.dataset.offClass);
            }
          }
          dot.remove();
        });

        container.appendChild(dot);
      });
    }

    setTimeout(() => {
      currentSlide++;
      if (currentSlide < slides.length) {
        showSlide(currentSlide);
      }
    }, slide.duration || 2000);
  }

showSlide(currentSlide);