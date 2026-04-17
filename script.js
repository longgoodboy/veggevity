const products = [
  { id: 1, name: "Bún nấm thanh đạm", type: "meal", priceBand: "mid", price: "79.000đ", prep: 15, prepBand: "fast", seniorFriendly: true, description: "Nước dùng rau củ dịu vị, dễ tiêu hóa và giàu chất xơ.", badges: ["Bổ sung sắt", "Người lớn tuổi", "Ít dầu"] },
  { id: 2, name: "Cơm gạo lứt ngũ sắc", type: "meal", priceBand: "mid", price: "92.000đ", prep: 20, prepBand: "medium", seniorFriendly: true, description: "Khẩu phần cân bằng với đậu, hạt và rau củ hấp.", badges: ["Protein tốt", "Canxi", "No lâu"] },
  { id: 3, name: "Set soup mềm xương khớp", type: "meal", priceBand: "high", price: "118.000đ", prep: 25, prepBand: "medium", seniorFriendly: true, description: "Set soup, đậu hũ non và rau củ mềm dành cho người ăn nhẹ.", badges: ["Người lớn tuổi", "Canxi", "Ít muối"] },
  { id: 4, name: "Granola hạt sen hữu cơ", type: "snack", priceBand: "low", price: "59.000đ", prep: 5, prepBand: "fast", seniorFriendly: false, description: "Bữa phụ tiện lợi với yến mạch, hạt sen và hạnh nhân.", badges: ["Snack lành mạnh", "Chất xơ", "Mang đi"] },
  { id: 5, name: "Sữa hạt B12 boost", type: "drink", priceBand: "low", price: "42.000đ", prep: 5, prepBand: "fast", seniorFriendly: true, description: "Sữa hạt bổ sung vitamin B12 cho người ăn chay trường.", badges: ["B12", "Uống liền", "Không đường tinh luyện"] },
  { id: 6, name: "Combo thực đơn 3 ngày", type: "combo", priceBand: "high", price: "329.000đ", prep: 30, prepBand: "slow", seniorFriendly: false, description: "Gói bữa chay theo ngày cho người bận rộn cần kiểm soát dinh dưỡng.", badges: ["Meal plan", "Kiểm soát năng lượng", "Tiện lợi"] }
];

const nutritionLookup = {
  dau_hu: { label: "Đậu hũ", protein: "8g", b12: "0mcg", calcium: "350mg", iron: "1.6mg", note: "Nguồn protein và canxi tốt, nên kết hợp với thực phẩm tăng cường B12." },
  nam: { label: "Nấm", protein: "3g", b12: "0mcg", calcium: "18mg", iron: "0.5mg", note: "Ít năng lượng, hợp với món thanh đạm và thực đơn người lớn tuổi." },
  rau_den: { label: "Rau dền", protein: "2.6g", b12: "0mcg", calcium: "215mg", iron: "2.3mg", note: "Hỗ trợ canxi và sắt thực vật, nên dùng kèm vitamin C để tăng hấp thu." },
  sua_hat: { label: "Sữa hạt tăng cường", protein: "6g", b12: "1.2mcg", calcium: "250mg", iron: "1.1mg", note: "Lựa chọn thực tế cho người ăn chay trường cần B12 và canxi." },
  dau_lang: { label: "Đậu lăng", protein: "9g", b12: "0mcg", calcium: "19mg", iron: "3.3mg", note: "Giàu đạm và sắt, hợp cho bữa chính hoặc soup." },
  hat_chia: { label: "Hạt chia", protein: "4g", b12: "0mcg", calcium: "179mg", iron: "2.2mg", note: "Bổ sung khoáng chất tốt trong khẩu phần nhỏ." }
};

const lookupAliases = {
  "đậu hũ": "dau_hu", "dau hu": "dau_hu", "nấm": "nam", "nam": "nam",
  "rau dền": "rau_den", "rau den": "rau_den", "sữa hạt": "sua_hat", "sua hat": "sua_hat",
  "đậu lăng": "dau_lang", "dau lang": "dau_lang", "hạt chia": "hat_chia", "hat chia": "hat_chia"
};

const mealSuggestions = {
  elderly: [
    "Cháo yến mạch với sữa hạt tăng cường và hạt chia ngâm mềm.",
    "Cơm gạo lứt mềm, canh rau dền, đậu hũ sốt nấm ít dầu.",
    "Soup đậu lăng xay mịn với bánh mì nguyên cám mềm."
  ],
  longterm: [
    "Tăng cường B12 từ sữa hạt bổ sung hoặc thực phẩm tăng cường mỗi ngày.",
    "Luân phiên đậu hũ, tempeh, đậu lăng và các loại hạt để đa dạng axit amin.",
    "Theo dõi sắt, canxi, B12 và vitamin D trong khẩu phần hàng tuần."
  ],
  bone: [
    "Ưu tiên rau xanh đậm, sữa hạt tăng cường, đậu hũ canxi và hạt chia.",
    "Giảm món quá mặn, tăng các bữa giàu canxi và vitamin D.",
    "Kết hợp vận động nhẹ và phơi nắng phù hợp bên cạnh khẩu phần."
  ],
  sugar: [
    "Chọn bữa có chất xơ cao, đạm thực vật và tinh bột chậm như gạo lứt.",
    "Hạn chế đồ uống ngọt, ưu tiên snack hạt và trái cây nguyên quả.",
    "Chia nhỏ bữa nếu cần ổn định năng lượng trong ngày."
  ]
};

const blogPosts = [
  { title: "Người ăn chay trường cần theo dõi B12 như thế nào?", audience: "Ăn chay trường", topic: "Dinh dưỡng khoa học", time: "6 phút đọc", summary: "Khung thực hành đơn giản để theo dõi dấu hiệu thiếu hụt và chọn nguồn bổ sung phù hợp." },
  { title: "3 mẫu bữa sáng mềm, dễ tiêu cho người lớn tuổi", audience: "Người cao tuổi", topic: "Thực đơn", time: "4 phút đọc", summary: "Các lựa chọn ít dầu, dễ nhai và vẫn đảm bảo đạm, canxi và năng lượng." },
  { title: "Ăn chay và sức khỏe xương: nên ưu tiên thực phẩm nào?", audience: "Cơ bản", topic: "Lợi ích sức khỏe", time: "5 phút đọc", summary: "Canxi, vitamin D, protein và thói quen ăn uống nào cần xuất hiện đều đặn." }
];

function createProductCard(product) {
  return `<article class="product-card reveal"><div class="product-thumb"></div><strong>${product.name}</strong><div class="product-meta">${product.price} · ${product.prep} phút chuẩn bị</div><p>${product.description}</p><div class="badge-row">${product.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div></article>`;
}

function renderProducts(list) {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<article class="product-card"><strong>Chưa có sản phẩm phù hợp</strong><p>Hãy nới bộ lọc để xem thêm lựa chọn phù hợp với nhu cầu của bạn.</p></article>`;
    revealOnLoad();
    return;
  }
  grid.innerHTML = list.map(createProductCard).join("");
  revealOnLoad();
}

function setupShopFilters() {
  const form = document.querySelector("[data-shop-filters]");
  if (!form) return;
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
  form.addEventListener("submit", (event) => { event.preventDefault(); applyFilters(); });
  const resetButton = form.querySelector("[data-reset-filters]");
  if (resetButton) {
    resetButton.addEventListener("click", () => { form.reset(); renderProducts(products); });
  }
  renderProducts(products);
}

function runNutritionLookup() {
  const form = document.querySelector("[data-nutrition-form]");
  if (!form) return;
  const output = document.querySelector("[data-nutrition-output]");
  const title = document.querySelector("[data-result-title]");
  const note = document.querySelector("[data-result-note]");
  const boxes = document.querySelectorAll("[data-result-key]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input").value.trim().toLowerCase();
    const key = lookupAliases[input];
    const result = key ? nutritionLookup[key] : null;
    if (!result) {
      title.textContent = "Chưa có dữ liệu khớp";
      note.textContent = "MVP hiện chỉ minh họa với một số nguyên liệu mẫu. Hãy thử: đậu hũ, nấm, rau dền, sữa hạt, đậu lăng hoặc hạt chia.";
      boxes.forEach((box) => { box.querySelector("strong").textContent = "--"; });
      output.classList.remove("hidden");
      return;
    }
    title.textContent = result.label;
    note.textContent = result.note;
    boxes.forEach((box) => { box.querySelector("strong").textContent = result[box.dataset.resultKey]; });
    output.classList.remove("hidden");
  });
}

function setupSuggestionTabs() {
  const tabs = document.querySelectorAll("[data-suggestion-tab]");
  const container = document.querySelector("[data-suggestion-grid]");
  if (!tabs.length || !container) return;
  const renderSuggestions = (key) => {
    container.innerHTML = mealSuggestions[key].map((item) => `<article class="suggestion-card reveal"><strong>Gợi ý thực đơn</strong><p>${item}</p></article>`).join("");
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.suggestionTab === key));
    revealOnLoad();
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => renderSuggestions(tab.dataset.suggestionTab)));
  renderSuggestions("elderly");
}

function setupChatbot() {
  const form = document.querySelector("[data-chatbot-form]");
  if (!form) return;
  const responseBox = document.querySelector("[data-chatbot-response]");
  const responseText = document.querySelector("[data-chatbot-text]");
  const answers = [
    { match: ["b12", "vitamin b12"], answer: "Người ăn chay trường nên ưu tiên thực phẩm tăng cường B12 hoặc bổ sung theo hướng dẫn chuyên môn. Veggevity đang dùng B12 như một tín hiệu nội dung quan trọng trên trang sản phẩm và trang dinh dưỡng." },
    { match: ["canxi", "xương", "xuong"], answer: "Để hỗ trợ xương, nên kết hợp đậu hũ canxi, sữa hạt tăng cường, rau xanh đậm và khẩu phần đủ đạm. Trang Dinh dưỡng của MVP cũng có tab gợi ý riêng cho nhóm hỗ trợ xương." },
    { match: ["người già", "nguoi gia", "cao tuổi", "cao tuoi"], answer: "Với người lớn tuổi, ưu tiên món mềm, ít dầu, dễ nhai và khẩu phần rõ ràng. Trong Shop có thể bật bộ lọc phù hợp cho người cao tuổi để xem món phù hợp." },
    { match: ["protein", "đạm", "dam"], answer: "Nguồn đạm chính nên được phân bổ từ đậu hũ, đậu lăng, các loại hạt và thực phẩm chay tăng cường. Mục tiêu của Veggevity là biến thông tin này thành lựa chọn mua hàng dễ hiểu." }
  ];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = form.querySelector("input").value.trim().toLowerCase();
    const matched = answers.find((item) => item.match.some((token) => value.includes(token)));
    responseText.textContent = matched ? matched.answer : "MVP chatbot hiện trả lời các chủ đề cơ bản như B12, protein, canxi hoặc nhu cầu của người lớn tuổi. Ở bản production, phần này sẽ được thay bằng chatbot tích hợp thực tế.";
    responseBox.classList.remove("hidden");
  });
}

function setupConsultationForm() {
  const form = document.querySelector("[data-consult-form]");
  if (!form) return;
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
    historyList.innerHTML = history.map((entry) => `<article class="history-item"><strong>${entry.name}</strong><div class="article-meta">${entry.age} tuổi · ${entry.goal}</div><p>${entry.habit}</p><div class="article-meta">${entry.time}</div></article>`).join("");
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = {
      name: form.querySelector("[name='name']").value.trim(),
      age: form.querySelector("[name='age']").value.trim(),
      habit: form.querySelector("[name='habit']").value.trim(),
      goal: form.querySelector("[name='goal']").value.trim(),
      time: new Date().toLocaleString("vi-VN")
    };
    const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
    history.unshift(payload);
    localStorage.setItem(storageKey, JSON.stringify(history.slice(0, 4)));
    form.reset();
    success.textContent = "Đã lưu yêu cầu tư vấn vào lịch sử trình duyệt. Bản production sẽ chuyển dữ liệu về admin email hoặc CRM.";
    renderHistory();
  });
  renderHistory();
}

function renderBlogPreview() {
  const grid = document.querySelector("[data-blog-grid]");
  if (!grid) return;
  grid.innerHTML = blogPosts.map((post) => `<article class="article-card reveal"><div class="tag-row"><span class="tag">${post.audience}</span><span class="tag">${post.topic}</span></div><strong>${post.title}</strong><div class="article-meta">${post.time}</div><p>${post.summary}</p></article>`).join("");
  revealOnLoad();
}

function revealOnLoad() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
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
  setupShopFilters();
  runNutritionLookup();
  setupSuggestionTabs();
  setupChatbot();
  setupConsultationForm();
  renderBlogPreview();
  revealOnLoad();
});
