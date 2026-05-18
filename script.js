const logoPath = "images/logo.png";

const products = [
  {
    id: 1,
    name: "Bún nấm thanh đạm",
    type: "meal",
    priceBand: "mid",
    price: "79.000đ",
    prep: 15,
    prepBand: "fast",
    seniorFriendly: true,
    image: "images/bún nấm thanh đạm.png",
    description: "Nước dùng dịu vị, nấm mềm và rau củ dễ tiêu hóa cho bữa ăn nhẹ bụng nhưng vẫn đủ chất.",
    badges: ["Sắt thực vật", "Người cao tuổi", "Ít dầu"]
  },
  {
    id: 2,
    name: "Cơm gạo lứt ngũ sắc",
    type: "meal",
    priceBand: "mid",
    price: "92.000đ",
    prep: 20,
    prepBand: "medium",
    seniorFriendly: true,
    image: "images/Cơm gạo lứt ngũ sắc.png",
    description: "Khẩu phần cân bằng với đậu, hạt và rau củ hấp để hỗ trợ no lâu và ăn chay đều đặn.",
    badges: ["Protein tốt", "Canxi", "No lâu"]
  },
  {
    id: 3,
    name: "Set soup mềm hỗ trợ xương",
    type: "meal",
    priceBand: "high",
    price: "118.000đ",
    prep: 25,
    prepBand: "medium",
    seniorFriendly: true,
    image: "images/4. Cháo & Ngũ cốc ăn liền.png",
    description: "Soup mềm, đậu hũ non và rau củ nhẹ vị dành cho người cần bữa ăn êm bụng và dễ nhai.",
    badges: ["Canxi", "Ít muối", "Dễ tiêu"]
  },
  {
    id: 4,
    name: "Granola hạt sen hữu cơ",
    type: "snack",
    priceBand: "low",
    price: "59.000đ",
    prep: 5,
    prepBand: "fast",
    seniorFriendly: false,
    image: "images/1. Hạt dinh dưỡng & Mix hạt.png",
    description: "Bữa phụ tiện lợi với yến mạch, hạt sen và hạnh nhân cho ngày bận rộn nhưng vẫn muốn ăn lành.",
    badges: ["Snack lành mạnh", "Chất xơ", "Mang đi"]
  },
  {
    id: 5,
    name: "Sữa hạt B12 boost",
    type: "drink",
    priceBand: "low",
    price: "42.000đ",
    prep: 5,
    prepBand: "fast",
    seniorFriendly: true,
    image: "images/2. Trái cây sấy mềm & Snack nhẹ.png",
    description: "Lựa chọn thực tế cho người ăn chay trường cần nhắc nhớ về B12 và canxi trong khẩu phần hằng ngày.",
    badges: ["B12", "Uống liền", "Không đường tinh luyện"]
  },
  {
    id: 6,
    name: "Combo thực đơn 3 ngày",
    type: "combo",
    priceBand: "high",
    price: "329.000đ",
    prep: 30,
    prepBand: "slow",
    seniorFriendly: false,
    image: "images/3. Món ăn chay dinh dưỡng.png",
    description: "Gói bữa chay theo ngày giúp người bận rộn vẫn duy trì nhịp ăn uống rõ ràng và có định hướng.",
    badges: ["Meal plan", "Kiểm soát năng lượng", "Tiện lợi"]
  }
];

const nutritionLookup = {
  dau_hu: { label: "Đậu hũ", protein: "8g", b12: "0mcg", calcium: "350mg", iron: "1.6mg", note: "Nguồn protein và canxi tốt, nên kết hợp với thực phẩm tăng cường B12 để khẩu phần cân bằng hơn." },
  nam: { label: "Nấm", protein: "3g", b12: "0mcg", calcium: "18mg", iron: "0.5mg", note: "Ít năng lượng, hợp với món thanh đạm và bữa ăn mềm cho người lớn tuổi." },
  rau_den: { label: "Rau dền", protein: "2.6g", b12: "0mcg", calcium: "215mg", iron: "2.3mg", note: "Hỗ trợ canxi và sắt thực vật, nên dùng cùng vitamin C để tăng hấp thu." },
  sua_hat: { label: "Sữa hạt tăng cường", protein: "6g", b12: "1.2mcg", calcium: "250mg", iron: "1.1mg", note: "Lựa chọn thực tế cho người ăn chay trường cần bổ sung B12 và canxi hằng ngày." },
  dau_lang: { label: "Đậu lăng", protein: "9g", b12: "0mcg", calcium: "19mg", iron: "3.3mg", note: "Giàu đạm và sắt, phù hợp cho bữa chính hoặc soup cần cảm giác no bền." },
  hat_chia: { label: "Hạt chia", protein: "4g", b12: "0mcg", calcium: "179mg", iron: "2.2mg", note: "Bổ sung khoáng chất tốt trong khẩu phần nhỏ, hợp cho bữa sáng hoặc bữa phụ." }
};

const lookupAliases = {
  "đậu hũ": "dau_hu",
  "dau hu": "dau_hu",
  tofu: "dau_hu",
  "nấm": "nam",
  nam: "nam",
  mushroom: "nam",
  "rau dền": "rau_den",
  "rau den": "rau_den",
  "amaranth greens": "rau_den",
  "sữa hạt": "sua_hat",
  "sua hat": "sua_hat",
  "fortified plant milk": "sua_hat",
  "đậu lăng": "dau_lang",
  "dau lang": "dau_lang",
  lentils: "dau_lang",
  "hạt chia": "hat_chia",
  "hat chia": "hat_chia",
  "chia seeds": "hat_chia"
};

const mealSuggestions = {
  elderly: [
    "Cháo yến mạch với sữa hạt tăng cường và hạt chia ngâm mềm để bữa sáng dịu bụng hơn.",
    "Cơm gạo lứt mềm, canh rau dền và đậu hũ sốt nấm ít dầu cho bữa chính đủ đạm.",
    "Soup đậu lăng xay mịn dùng kèm bánh mì nguyên cám mềm khi cần bữa tối nhẹ nhàng."
  ],
  longterm: [
    "Luân phiên đậu hũ, đậu lăng, các loại hạt và thực phẩm tăng cường để giảm thiếu hụt vi chất kéo dài.",
    "Theo dõi B12, sắt, canxi và vitamin D theo tuần để thấy rõ phần nào trong khẩu phần đang thiếu.",
    "Chọn thêm món có nhãn B12 hoặc giàu đạm khi lịch ăn uống trở nên thất thường."
  ],
  bone: [
    "Ưu tiên rau xanh đậm, sữa hạt tăng cường, đậu hũ canxi và hạt chia trong các bữa nhỏ đều đặn.",
    "Giảm món quá mặn, tăng món mềm và giàu canxi để người lớn tuổi dễ ăn hơn mỗi ngày.",
    "Kết hợp vận động nhẹ và phơi nắng phù hợp bên cạnh khẩu phần nhiều đạm và canxi."
  ],
  sugar: [
    "Chọn bữa có chất xơ cao, đạm thực vật và tinh bột chậm như gạo lứt để năng lượng ổn định hơn.",
    "Ưu tiên snack hạt hoặc trái cây nguyên quả thay cho đồ uống ngọt và món ăn quá nhanh đói.",
    "Chia nhỏ bữa nếu cần để tránh bỏ bữa rồi ăn quá nhiều trong một lần."
  ]
};

const blogPosts = [
  {
    id: 1,
    title: "Vitamin B12 trong chế độ ăn chay: vì sao cần theo dõi đều đặn?",
    audience: "Ăn chay trường",
    topic: "B12 và vi chất",
    time: "6 phút đọc",
    image: "images/2.1 chuối sấy.png",
    summary: "Một khung theo dõi đơn giản để biết khi nào nên ưu tiên thực phẩm tăng cường hoặc hỏi thêm chuyên gia.",
    content: ""
  },
  {
    id: 2,
    title: "Bữa sáng mềm cho người lớn tuổi: bắt đầu ngày mới nhẹ bụng mà vẫn đủ chất",
    audience: "Người cao tuổi",
    topic: "Công thức và gợi ý món",
    time: "4 phút đọc",
    image: "images/4. Cháo & Ngũ cốc ăn liền.png",
    summary: "Gợi ý các bữa sáng ít dầu, dễ nhai và có thể linh hoạt theo khẩu vị của gia đình.",
    content: ""
  },
  {
    id: 3,
    title: "Ăn chay và sức khỏe xương: nên ưu tiên thực phẩm nào mỗi tuần?",
    audience: "Hỗ trợ xương",
    topic: "Canxi và xương",
    time: "5 phút đọc",
    image: "images/3. Món ăn chay dinh dưỡng.png",
    summary: "Tổng hợp ngắn gọn về canxi, vitamin D, protein và thói quen ăn uống giúp bữa chay rõ ràng hơn.",
    content: ""
  },
  {
    id: 4,
    title: "Bữa ăn chay đủ đạm không khó nếu bạn biết bắt đầu từ đâu",
    audience: "Người mới bắt đầu",
    topic: "Dinh dưỡng cơ bản",
    time: "5 phút đọc",
    image: "images/1. Hạt dinh dưỡng & Mix hạt.png",
    summary: "Một hướng dẫn ngắn để ghép đậu, hạt, rau và tinh bột chậm thành bữa ăn cân bằng.",
    content: ""
  }
];

const chatbotAnswers = [
  {
    match: ["b12", "vitamin b12"],
    answer: "Với người ăn chay trường, B12 thường cần được chú ý riêng. Bạn có thể bắt đầu từ thực phẩm tăng cường B12, sau đó nếu cần thì hỏi thêm chuyên gia để chọn cách bổ sung phù hợp."
  },
  {
    match: ["protein", "đạm", "dam"],
    answer: "Đạm thực vật có thể đến từ đậu hũ, đậu lăng, các loại hạt và sản phẩm chay tăng cường. Điều quan trọng là phân bổ đều trong ngày thay vì chỉ dồn vào một bữa."
  },
  {
    match: ["canxi", "xương", "xuong", "bone"],
    answer: "Để hỗ trợ xương, hãy ưu tiên đậu hũ canxi, sữa hạt tăng cường, rau xanh đậm và bữa ăn đủ đạm. Trang Dinh dưỡng cũng có nhóm gợi ý riêng cho nhu cầu này."
  },
  {
    match: ["cao tuổi", "cao tuoi", "người già", "nguoi gia", "elderly"],
    answer: "Với người lớn tuổi, nên chọn món mềm, ít dầu, dễ nhai và có thông tin rõ ràng. Ở trang Cửa hàng, bạn có thể dùng bộ lọc phù hợp người cao tuổi để tìm món nhanh hơn."
  }
];

function makeImageMarkup(src, alt, className) {
  return `
    <div class="${className}">
      <img src="${src}" alt="${alt}" loading="lazy" onerror="this.parentElement.classList.add('is-fallback'); this.remove();" />
    </div>
  `;
}

function createProductCard(product) {
  return `
    <article class="product-card reveal">
      ${makeImageMarkup(product.image, product.name, "product-media")}
      <div class="product-topline">
        <span>${product.price}</span>
        <span>${product.prep} phút chuẩn bị</span>
      </div>
      <strong>${product.name}</strong>
      <p>${product.description}</p>
      <div class="badge-row">
        ${product.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}
        ${product.seniorFriendly ? `<span class="badge">Phù hợp người cao tuổi</span>` : ""}
      </div>
      <a class="button button-secondary" href="consultation.html?meal=${encodeURIComponent(product.name)}">Hỏi về món này</a>
    </article>
  `;
}

function renderProductGrid(grid) {
  const mode = grid.dataset.productGrid;
  const items = mode === "home" ? products.slice(0, 4) : products;
  grid.innerHTML = items.map(createProductCard).join("");
}

function renderProducts(list) {
  const grid = document.querySelector('[data-product-grid="shop"]');
  if (!grid) {
    return;
  }

  if (!list.length) {
    grid.innerHTML = `
      <article class="product-card">
        <strong>Chưa có món khớp bộ lọc hiện tại</strong>
        <p>Hãy nới điều kiện về giá, thời gian chuẩn bị hoặc nhóm đối tượng để xem thêm lựa chọn phù hợp.</p>
      </article>
    `;
    revealOnLoad();
    return;
  }

  grid.innerHTML = list.map(createProductCard).join("");
  revealOnLoad();
}

function setupProductGrids() {
  document.querySelectorAll("[data-product-grid]").forEach((grid) => renderProductGrid(grid));
  revealOnLoad();
}

function applyShopFiltersFromQuery(form) {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const senior = params.get("senior");

  if (type && form.querySelector(`[name='type'] option[value='${type}']`)) {
    form.querySelector("[name='type']").value = type;
  }

  if (senior === "true") {
    form.querySelector("[name='senior']").checked = true;
  }
}

function setupShopFilters() {
  const form = document.querySelector("[data-shop-filters]");
  if (!form) {
    return;
  }

  const applyFilters = () => {
    const type = form.querySelector("[name='type']").value;
    const price = form.querySelector("[name='price']").value;
    const prep = form.querySelector("[name='prep']").value;
    const senior = form.querySelector("[name='senior']").checked;

    const filtered = products.filter((product) => {
      const matchType = type === "all" || product.type === type;
      const matchPrice = price === "all" || product.priceBand === price;
      const matchPrep = prep === "all" || product.prepBand === prep;
      const matchSenior = !senior || product.seniorFriendly;
      return matchType && matchPrice && matchPrep && matchSenior;
    });

    renderProducts(filtered);
  };

  form.addEventListener("change", applyFilters);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });

  const resetButton = form.querySelector("[data-reset-filters]");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      form.reset();
      renderProducts(products);
    });
  }

  applyShopFiltersFromQuery(form);
  applyFilters();
}

function runNutritionLookup() {
  document.querySelectorAll("[data-nutrition-form]").forEach((form) => {
    const output = form.parentElement.querySelector("[data-nutrition-output]") || form.querySelector("[data-nutrition-output]");
    const title = output?.querySelector("[data-result-title]");
    const note = output?.querySelector("[data-result-note]");
    const boxes = output?.querySelectorAll("[data-result-key]");
    if (!output || !title || !note || !boxes?.length) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input").value.trim().toLowerCase();
      const result = lookupAliases[input] ? nutritionLookup[lookupAliases[input]] : null;

      if (!result) {
        title.textContent = "Chưa có dữ liệu khớp";
        note.textContent = "Bạn có thể thử: tofu, mushroom, amaranth greens, fortified plant milk, lentils hoặc chia seeds.";
        boxes.forEach((box) => {
          box.querySelector("strong").textContent = "--";
        });
        output.classList.remove("hidden");
        return;
      }

      title.textContent = result.label;
      note.textContent = result.note;
      boxes.forEach((box) => {
        box.querySelector("strong").textContent = result[box.dataset.resultKey];
      });
      output.classList.remove("hidden");
    });
  });
}

function setupSuggestionTabs() {
  const tabs = document.querySelectorAll("[data-suggestion-tab]");
  const container = document.querySelector("[data-suggestion-grid]");
  if (!tabs.length || !container) {
    return;
  }

  const renderSuggestions = (key) => {
    container.innerHTML = mealSuggestions[key]
      .map((item) => `<article class="suggestion-card reveal"><strong>Gợi ý thực đơn</strong><p>${item}</p></article>`)
      .join("");
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.suggestionTab === key));
    revealOnLoad();
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => renderSuggestions(tab.dataset.suggestionTab));
  });

  renderSuggestions("elderly");
}

function setupChatbot() {
  const form = document.querySelector("[data-chatbot-form]");
  if (!form) {
    return;
  }

  const responseBox = document.querySelector("[data-chatbot-response]");
  const responseText = document.querySelector("[data-chatbot-text]");
  const input = form.querySelector("input");
  const title = responseBox?.querySelector("strong");
  const prefill = new URLSearchParams(window.location.search).get("meal");

  if (prefill && input) {
    input.value = `Món ${prefill} có phù hợp với nhu cầu của tôi không?`;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim().toLowerCase();
    const matched = chatbotAnswers.find((item) => item.match.some((token) => value.includes(token)));

    title.textContent = "Gợi ý từ Ask Veggevity";
    responseText.textContent = matched
      ? matched.answer
      : "Veggevity hiện trả lời nhanh các chủ đề như B12, protein, canxi hoặc nhu cầu của người lớn tuổi. Nếu câu hỏi của bạn cụ thể hơn, hãy gửi form bên dưới để chúng tôi ghi nhận đầy đủ hơn.";
    responseBox.classList.remove("hidden");
  });
}

function setupConsultationForm() {
  const form = document.querySelector("[data-consult-form]");
  if (!form) {
    return;
  }

  const storageKey = "veggevity-consult-history";
  const historyList = document.querySelector("[data-history-list]");
  const historyWrap = document.querySelector("[data-history-wrap]");
  const success = document.querySelector("[data-consult-success]");

  const renderHistory = () => {
    const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!history.length) {
      historyWrap.classList.add("hidden");
      return;
    }

    historyWrap.classList.remove("hidden");
    historyList.innerHTML = history
      .map((entry) => {
        const contactLine = entry.contact ? `<div class="article-meta">Liên hệ: ${entry.contact}</div>` : "";
        return `
          <article class="history-item">
            <strong>${entry.name}</strong>
            <div class="article-meta">${entry.age} tuổi · ${entry.eatingPattern}</div>
            <div class="article-meta">Mục tiêu: ${entry.goal}</div>
            <p>${entry.notes}</p>
            ${contactLine}
            <div class="article-meta">${entry.time}</div>
          </article>
        `;
      })
      .join("");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = {
      name: form.querySelector("[name='name']").value.trim(),
      age: form.querySelector("[name='age']").value.trim(),
      eatingPattern: form.querySelector("[name='eatingPattern']").value.trim(),
      goal: form.querySelector("[name='goal']").value.trim(),
      notes: form.querySelector("[name='notes']").value.trim(),
      contact: form.querySelector("[name='contact']").value.trim(),
      time: new Date().toLocaleString("vi-VN")
    };

    const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
    history.unshift(payload);
    localStorage.setItem(storageKey, JSON.stringify(history.slice(0, 4)));
    form.reset();
    success.textContent = "Yêu cầu đã được lưu trong trình duyệt để minh họa luồng tư vấn và lịch sử theo dõi.";
    renderHistory();
  });

  renderHistory();
}

function setupCleanLogos() {
  const logos = document.querySelectorAll("[data-clean-logo]");
  if (!logos.length) {
    return;
  }

  logos.forEach((logo) => {
    const source = logo.getAttribute("src");
    if (!source) {
      return;
    }

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) {
        return;
      }

      context.drawImage(image, 0, 0);
      const bitmap = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = bitmap;

      for (let index = 0; index < data.length; index += 4) {
        const red = data[index];
        const green = data[index + 1];
        const blue = data[index + 2];
        const alpha = data[index + 3];
        const spread = Math.max(red, green, blue) - Math.min(red, green, blue);

        if (!alpha) {
          continue;
        }

        if (red > 224 && green > 224 && blue > 224 && spread < 26) {
          data[index + 3] = 0;
        }
      }

      context.putImageData(bitmap, 0, 0);
      logo.src = canvas.toDataURL("image/png");
      logo.classList.add("logo-cleaned");
    };
    image.src = source;
  });
}

function setupMealSlider() {
  const slider = document.querySelector("[data-meal-slider]");
  const track = document.querySelector("[data-meal-track]");
  const prev = document.querySelector("[data-meal-slider-prev]");
  const next = document.querySelector("[data-meal-slider-next]");

  if (!slider || !track || !prev || !next) {
    return;
  }

  const getStep = () => {
    const card = track.querySelector(".meal-card");
    if (!card) {
      return slider.clientWidth * 0.8;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    return card.getBoundingClientRect().width + gap;
  };

  let autoplayId = null;

  const advance = (direction = 1) => {
    const step = getStep();
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const nextPosition = track.scrollLeft + step * direction;

    if (direction > 0 && nextPosition >= maxScrollLeft - step * 0.35) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && nextPosition <= step * 0.35) {
      track.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
    track.classList.add("is-paused");
  };

  const startAutoplay = () => {
    stopAutoplay();
    track.classList.remove("is-paused");
    autoplayId = window.setInterval(() => advance(1), 3200);
  };

  prev.addEventListener("click", () => {
    stopAutoplay();
    advance(-1);
    startAutoplay();
  });

  next.addEventListener("click", () => {
    stopAutoplay();
    advance(1);
    startAutoplay();
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);
  slider.addEventListener("focusin", stopAutoplay);
  slider.addEventListener("focusout", startAutoplay);
  slider.addEventListener("touchstart", stopAutoplay, { passive: true });
  slider.addEventListener("touchend", startAutoplay, { passive: true });

  startAutoplay();
}

function createBlogCard(post) {
  return `
    <article class="article-card reveal">
      ${makeImageMarkup(post.image || logoPath, post.title, "article-image")}
      <div class="tag-row">
        <span class="tag">${post.audience}</span>
        <span class="tag">${post.topic}</span>
      </div>
      <strong>${post.title}</strong>
      <div class="article-meta">${post.time}</div>
      <p>${post.summary}</p>
      <a class="button button-secondary" href="consultation.html">Đọc tiếp cùng Veggevity</a>
    </article>
  `;
}

function renderBlogPreview() {
  document.querySelectorAll("[data-blog-grid]").forEach((grid) => {
    const mode = grid.dataset.blogGrid;
    const items = mode === "nutrition" ? blogPosts.slice(0, 4) : mode === "home" ? blogPosts.slice(0, 3) : blogPosts;
    grid.innerHTML = items.map(createBlogCard).join("");
  });
  revealOnLoad();
}

function revealOnLoad() {
  const nodes = document.querySelectorAll(".reveal:not(.visible)");
  if (!nodes.length) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  nodes.forEach((node) => observer.observe(node));
}

document.addEventListener("DOMContentLoaded", () => {
  setupCleanLogos();
  setupProductGrids();
  setupShopFilters();
  runNutritionLookup();
  setupSuggestionTabs();
  setupChatbot();
  setupConsultationForm();
  setupMealSlider();
  renderBlogPreview();
  revealOnLoad();
});
