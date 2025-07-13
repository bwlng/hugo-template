const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {
    const prev = carousel.querySelector("[data-direction=previous]");
    const next = carousel.querySelector("[data-direction=next]");
    const paginationDots = carousel.querySelectorAll("[data-pagination-dot]");
    const scrollContainer = carousel.querySelector("[data-scroll]");
    const scrollItems = [...scrollContainer.querySelectorAll("[data-item]")];

    const options = {
        root: scrollContainer,
        rootMargin: `0px`,
        threshold: 0.9,
    };

    const setActiveIndex = (index) => {
        paginationDots.forEach((dot) => {
            dot.setAttribute("aria-selected", false);
        });

        paginationDots[index]?.setAttribute("aria-selected", true);
        const activeItem = scrollItems[index];
        if (activeItem) {
            const media = activeItem.querySelector("img, video");
            const mediaHeight = media.offsetHeight
            scrollContainer.style.height = media && mediaHeight > 0 ? `${media.offsetHeight}px` : ``;
        }
    };

    setActiveIndex(0)

    const onIntersect = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const visibleItem = entry.target;
                if (visibleItem.dataset.itemIndex) {
                    setActiveIndex(Number.parseInt(visibleItem.dataset.itemIndex));
                } else {
                    setActiveIndex(0);
                }
            }
        });
    };

    const observer = new IntersectionObserver(onIntersect, options);

    scrollItems.forEach((item) => {
        observer.observe(item);
    });

    const onPrevNextClick = (event) => {
        event.preventDefault();

        const target = event.currentTarget;
        const distance = scrollContainer.offsetWidth;
        const direction = target.dataset.direction;
        const scrollTo = direction === "next" ? distance : distance * -1;

        scrollContainer.scrollBy({ left: scrollTo, behavior: "smooth" });
    };

    const onPaginationClick = (event) => {
        event.preventDefault();

        const distance = scrollContainer.offsetWidth;
        const target = event.currentTarget;

        if (target.dataset.paginationIndex) {
            const index = Number.parseInt(target.dataset.paginationIndex);
            scrollContainer.scrollTo({ left: distance * index, behavior: "smooth" });
        }
    };

    prev.addEventListener("click", onPrevNextClick);
    next.addEventListener("click", onPrevNextClick);

    paginationDots.forEach((dot) => {
        dot.addEventListener("click", onPaginationClick);
    });
});