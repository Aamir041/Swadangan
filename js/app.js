/**
 * ============================================================================
 * SWADANGAN FOODS - INTERACTIVE ENGINE & CONFIGURABLE CATALOG CONTROLLER
 * ============================================================================
 */

(function () {
  const appConfig = window.SWADANGAN_CONFIG;

  // Application State
  const state = {
    viewType: appConfig.settings.defaultViewType || "grid", // "grid" | "compact"
    gridCols: appConfig.settings.defaultGridColumns || 3,
    selectedCategory: "all",
    searchQuery: "",
    selectedSpice: "all", // "all" | 1 | 2 | 3 | 4
    selectedDietary: [],
    sortBy: "featured", // "featured" | "name-asc" | "spice-desc" | "protein-desc"
    compareList: [] // array of productIds (max 4)
  };

  // ============================================================================
  // CONFIGURABLE PRODUCTS CATALOG RENDERER
  // ============================================================================

  function getFilteredAndSortedProducts() {
    const q = state.searchQuery.trim().toLowerCase();

    let list = appConfig.products.filter((p) => {
      // Category filter
      if (state.selectedCategory !== "all" && p.category !== state.selectedCategory) {
        return false;
      }
      // Search filter
      if (q) {
        const hay = `${p.name} ${p.hindiName} ${p.shortDescription} ${p.ingredients.join(" ")} ${p.tasteProfile.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      // Spice filter
      if (state.selectedSpice !== "all" && Number(state.selectedSpice) !== p.spiceLevel) {
        return false;
      }
      // Dietary filter
      if (state.selectedDietary.length > 0) {
        const hasAll = state.selectedDietary.every((tag) => p.dietary.includes(tag));
        if (!hasAll) return false;
      }
      return true;
    });

    // Sort
    list.sort((a, b) => {
      switch (state.sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "spice-desc":
          return b.spiceLevel - a.spiceLevel;
        case "protein-desc":
          return (b.nutritionPer100g?.proteinG || 0) - (a.nutritionPer100g?.proteinG || 0);
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return list;
  }

  function renderSpiceDots(level) {
    let html = `<span class="spice-dots" title="Spice Level: ${level}/4">`;
    for (let i = 1; i <= 4; i++) {
      html += `<span class="spice-dot ${i <= level ? `active-${level}` : ""}"></span>`;
    }
    html += `</span>`;
    return html;
  }

  function renderProductCard(product) {
    const isCompared = state.compareList.includes(product.id);

    return `
      <article class="product-card" style="--card-theme: ${product.themeColor || "#14375a"}">
        <div class="product-card__media">
          ${
            product.badge
              ? `<span class="product-card__badge" style="background:${product.badgeColor || "var(--maroon-primary)"}">${product.badge}</span>`
              : ""
          }
          <div class="product-card__top-right">
            ${
              appConfig.settings.enableProductComparison
                ? `<label class="compare-check-label" title="Compare nutritional facts & ingredients">
                    <input type="checkbox" ${isCompared ? "checked" : ""} onchange="window.SwadanganApp.toggleCompare('${product.id}')" />
                    Compare
                  </label>`
                : ""
            }
            <span class="veg-mark" title="100% Pure Vegetarian"></span>
          </div>
          <img
            src="${product.image}"
            alt="${product.name}"
            class="product-card__img"
            loading="lazy"
            onclick="window.SwadanganApp.openQuickView('${product.id}')"
            style="cursor:pointer"
          />
          <button type="button" class="product-card__quick-btn" onclick="window.SwadanganApp.openQuickView('${product.id}')">
            🔍 Ingredients & Nutrition
          </button>
        </div>

        <div class="product-card__body">
          <div class="product-card__series">${product.series}</div>
          <div class="product-card__title-row">
            <h3 class="product-card__title">
              <a href="javascript:void(0)" onclick="window.SwadanganApp.openQuickView('${product.id}')">${product.name}</a>
            </h3>
            <span class="product-card__hindi">${product.hindiName || ""}</span>
          </div>
          <p class="product-card__desc">${product.shortDescription}</p>

          ${
            appConfig.settings.showSpiceMeter || appConfig.settings.showCrunchMeter
              ? `<div class="product-meters">
                  ${
                    appConfig.settings.showSpiceMeter
                      ? `<div class="meter-item">
                          <span>🌶️ ${product.spiceLabel}</span>
                          ${renderSpiceDots(product.spiceLevel)}
                        </div>`
                      : ""
                  }
                  ${
                    appConfig.settings.showCrunchMeter
                      ? `<div class="meter-item" style="color:var(--maroon-primary)">
                          <span>⚡ Crunch: ${product.crunchLevel}/5</span>
                        </div>`
                      : ""
                  }
                </div>`
              : ""
          }

          <div class="product-card__footer">
            <div style="font-size:0.78rem; color:var(--text-muted); font-weight:600;">
              ${appConfig.settings.showShelfLife ? `⏳ ${product.shelfLifeMonths} Months Shelf Life` : ""}
            </div>

            <div class="card-actions">
              <button
                type="button"
                class="btn btn--primary"
                style="padding: 0.55rem 1.1rem; font-size: 0.82rem; width: 100%;"
                onclick="window.SwadanganApp.openQuickView('${product.id}')"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderCatalog() {
    const catalogContainer = document.getElementById("configurableCatalogOutput");
    if (!catalogContainer) return;

    const filtered = getFilteredAndSortedProducts();

    const countEl = document.getElementById("catalogResultCount");
    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${appConfig.products.length} Authentic Farsan Varieties`;
    }

    if (filtered.length === 0) {
      catalogContainer.innerHTML = `
        <div style="background:var(--cream-card); border:1.5px solid var(--border-gold); border-radius:var(--radius-lg); padding:3.5rem 1.5rem; text-align:center;">
          <div style="font-size:3rem; margin-bottom:0.75rem;">🔍</div>
          <h3 style="font-family:var(--font-heading); font-size:1.8rem; color:var(--maroon-primary); margin-bottom:0.5rem;">No Matching Farsan Found</h3>
          <p style="color:var(--text-muted); margin-bottom:1.25rem;">Try clearing your spice or dietary filters to view all Basuri products.</p>
          <button type="button" class="btn btn--primary" onclick="window.SwadanganApp.resetAllFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    const compactClass = state.viewType === "compact" ? "view-compact" : "";
    catalogContainer.innerHTML = `
      <div class="product-grid ${compactClass}" style="--grid-cols: ${state.gridCols}">
        ${filtered.map((p) => renderProductCard(p)).join("")}
      </div>
    `;
  }

  function renderCategoryTabs() {
    const tabWrap = document.getElementById("categoryTabsContainer");
    if (!tabWrap) return;

    tabWrap.innerHTML = appConfig.categories
      .map(
        (cat) => `
        <button
          type="button"
          class="category-tab ${state.selectedCategory === cat.id ? "active" : ""}"
          onclick="window.SwadanganApp.setCategory('${cat.id}')"
        >
          <span>${cat.icon}</span>
          <span>${cat.name}</span>
        </button>
      `
      )
      .join("");
  }

  function renderDietaryFilterChips() {
    const chipWrap = document.getElementById("dietaryChipsContainer");
    if (!chipWrap) return;

    chipWrap.innerHTML = appConfig.dietaryTags
      .map((tag) => {
        const active = state.selectedDietary.includes(tag.id);
        return `
          <button
            type="button"
            class="filter-chip ${active ? "active" : ""}"
            onclick="window.SwadanganApp.toggleDietary('${tag.id}')"
          >
            ${tag.icon} ${tag.label}
          </button>
        `;
      })
      .join("");
  }

  // ============================================================================
  // FEATURED PRODUCTS ON HOME PAGE
  // ============================================================================

  function renderHomeFeaturedGrid() {
    const homeGrid = document.getElementById("homeFeaturedProductsGrid");
    if (!homeGrid) return;

    const list = appConfig.products.slice(0, 9);
    homeGrid.innerHTML = list.map((p) => renderProductCard(p)).join("");
  }

  // ============================================================================
  // QUICK VIEW MODAL & PRODUCT COMPARISON MODAL
  // ============================================================================

  function openQuickView(productId) {
    const product = appConfig.products.find((p) => p.id === productId);
    const modal = document.getElementById("quickViewModal");
    const content = document.getElementById("quickViewModalBody");
    if (!product || !modal || !content) return;

    const n = product.nutritionPer100g || {};

    content.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-media" style="--qv-theme: ${product.themeColor || "#14375a"}">
          <img src="${product.image}" alt="${product.name}" />
          <div style="margin-top:1.25rem; display:flex; gap:0.5rem; flex-wrap:wrap; justify-content:center;">
            ${product.tasteProfile
              .map((t) => `<span class="gold-pill gold-pill--dark" style="font-size:0.72rem">${t}</span>`)
              .join("")}
          </div>
        </div>
        <div class="quickview-content">
          <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.35rem;">
            <span class="veg-mark"></span>
            <span style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--gold-dark);">${product.series}</span>
          </div>
          <h2 style="font-family:var(--font-heading); font-size:2.1rem; color:var(--maroon-primary); line-height:1.15;">
            ${product.name} <span style="font-size:1.1rem; color:var(--text-muted); font-weight:500;">(${product.hindiName || ""})</span>
          </h2>
          <p style="margin:0.85rem 0 1.25rem; color:var(--text-muted); font-size:0.95rem;">${product.detailedDescription}</p>

          <div style="margin-bottom:1.15rem;">
            <strong style="font-size:0.82rem; text-transform:uppercase; color:var(--maroon-primary);">Key Ingredients:</strong>
            <p style="font-size:0.86rem; color:var(--text-dark); margin-top:0.25rem;">${product.ingredients.join(", ")}</p>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.15rem; font-size:0.84rem; background:var(--cream-warm); padding:0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-gold);">
            <div><strong>Shelf Life:</strong> ${product.shelfLifeMonths} Months</div>
            <div><strong>Spice Level:</strong> ${product.spiceLabel} (${product.spiceLevel}/4)</div>
            <div style="grid-column:span 2;"><strong>Packaging:</strong> ${product.packagingType}</div>
          </div>

          ${
            appConfig.settings.showNutritionFacts
              ? `<div style="margin-bottom:0.5rem;">
                  <strong style="font-size:0.82rem; text-transform:uppercase; color:var(--maroon-primary);">Nutritional Information (Approx. per 100g):</strong>
                  <div class="nutrition-table-scroll">
                    <table class="nutrition-mini-table">
                      <thead>
                        <tr>
                          <th>Energy</th>
                          <th>Protein</th>
                          <th>Carbs</th>
                          <th>Total Fat</th>
                          <th>Trans Fat</th>
                          <th>Sodium</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>${n.energyKcal} kcal</td>
                          <td><strong>${n.proteinG} g</strong></td>
                          <td>${n.carbsG} g</td>
                          <td>${n.totalFatG} g</td>
                          <td><strong>${n.transFatG} g</strong></td>
                          <td>${n.sodiumMg} mg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>`
              : ""
          }
        </div>
      </div>
    `;

    modal.classList.add("open");
  }

  function renderCompareBarAndModal() {
    const bar = document.getElementById("compareFloatingBar");
    if (!bar) return;

    if (!appConfig.settings.enableProductComparison || state.compareList.length === 0) {
      bar.classList.remove("active");
      return;
    }

    bar.classList.add("active");
    bar.innerHTML = `
      <span style="font-size:0.88rem; font-weight:700;">⚖️ Comparing ${state.compareList.length} Farsan Variety(s)</span>
      <button type="button" class="btn btn--gold" style="padding:0.45rem 0.9rem; font-size:0.8rem;" onclick="window.SwadanganApp.openCompareModal()">
        Compare Side-by-Side
      </button>
      <button type="button" style="color:var(--gold-light); font-size:0.8rem; text-decoration:underline;" onclick="window.SwadanganApp.clearCompare()">
        Clear
      </button>
    `;
  }

  function openCompareModal() {
    const modal = document.getElementById("quickViewModal");
    const content = document.getElementById("quickViewModalBody");
    if (!modal || !content) return;

    const prods = state.compareList.map((id) => appConfig.products.find((p) => p.id === id)).filter(Boolean);

    content.innerHTML = `
      <div style="padding:2rem;">
        <h2 style="font-family:var(--font-heading); font-size:2rem; color:var(--maroon-primary); margin-bottom:1.25rem;">
          Side-by-Side Farsan Comparison
        </h2>
        <div style="overflow-x:auto;">
          <table class="catalog-table">
            <thead>
              <tr>
                <th>Attribute</th>
                ${prods.map((p) => `<th>${p.name}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pack Preview</strong></td>
                ${prods.map((p) => `<td><img src="${p.image}" alt="${p.name}" style="height:110px; border-radius:6px;" /></td>`).join("")}
              </tr>
              <tr>
                <td><strong>Spice Profile</strong></td>
                ${prods.map((p) => `<td>${p.spiceLabel} (${p.spiceLevel}/4)</td>`).join("")}
              </tr>
              <tr>
                <td><strong>Taste Notes</strong></td>
                ${prods.map((p) => `<td>${p.tasteProfile.join(", ")}</td>`).join("")}
              </tr>
              <tr>
                <td><strong>Protein (per 100g)</strong></td>
                ${prods.map((p) => `<td><strong>${p.nutritionPer100g.proteinG}g</strong></td>`).join("")}
              </tr>
              <tr>
                <td><strong>Energy (per 100g)</strong></td>
                ${prods.map((p) => `<td>${p.nutritionPer100g.energyKcal} kcal</td>`).join("")}
              </tr>
              <tr>
                <td><strong>Key Ingredients</strong></td>
                ${prods.map((p) => `<td style="font-size:0.8rem;">${p.ingredients.slice(0, 5).join(", ")}</td>`).join("")}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    modal.classList.add("open");
  }

  function showToast(msg) {
    let toast = document.getElementById("swadanganToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "swadanganToast";
      toast.style.cssText = `
        position: fixed; bottom: 26px; right: 26px; z-index: 400;
        background: var(--royal-navy); color: var(--gold-bright);
        border: 2px solid var(--gold-primary); padding: 0.85rem 1.35rem;
        border-radius: 10px; font-weight: 700; font-size: 0.9rem;
        box-shadow: 0 12px 30px rgba(0,0,0,0.4); transition: opacity 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = `✨ ${msg}`;
    toast.style.opacity = "1";
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 3200);
  }

  // ============================================================================
  // PUBLIC API FOR INLINE HANDLERS
  // ============================================================================

  function refreshAllViews() {
    renderCategoryTabs();
    renderDietaryFilterChips();
    renderCatalog();
    renderHomeFeaturedGrid();
    renderCompareBarAndModal();
  }

  window.SwadanganApp = {
    setViewType(view) {
      state.viewType = view;
      document.querySelectorAll(".js-view-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.view === view);
      });
      renderCatalog();
    },

    setGridCols(cols) {
      state.gridCols = Number(cols);
      renderCatalog();
    },

    setCategory(catId) {
      state.selectedCategory = catId;
      renderCategoryTabs();
      renderCatalog();
    },

    setSearch(q) {
      state.searchQuery = q;
      renderCatalog();
    },

    setSpiceFilter(level) {
      state.selectedSpice = level;
      document.querySelectorAll(".js-spice-chip").forEach((btn) => {
        btn.classList.toggle("active", String(btn.dataset.spice) === String(level));
      });
      renderCatalog();
    },

    setSortBy(sortVal) {
      state.sortBy = sortVal;
      renderCatalog();
    },

    toggleDietary(tagId) {
      const idx = state.selectedDietary.indexOf(tagId);
      if (idx >= 0) {
        state.selectedDietary.splice(idx, 1);
      } else {
        state.selectedDietary.push(tagId);
      }
      renderDietaryFilterChips();
      renderCatalog();
    },

    resetAllFilters() {
      state.selectedCategory = "all";
      state.searchQuery = "";
      state.selectedSpice = "all";
      state.selectedDietary = [];
      const searchInput = document.getElementById("catalogSearchInput");
      if (searchInput) searchInput.value = "";
      document.querySelectorAll(".js-spice-chip").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.spice === "all");
      });
      refreshAllViews();
    },

    openQuickView,
    closeQuickView() {
      document.getElementById("quickViewModal")?.classList.remove("open");
    },

    toggleCompare(productId) {
      const idx = state.compareList.indexOf(productId);
      if (idx >= 0) {
        state.compareList.splice(idx, 1);
      } else {
        if (state.compareList.length >= 4) {
          showToast("You can compare up to 4 products at a time.");
          renderCatalog();
          return;
        }
        state.compareList.push(productId);
      }
      renderCatalog();
      renderCompareBarAndModal();
    },

    clearCompare() {
      state.compareList = [];
      renderCatalog();
      renderCompareBarAndModal();
    },

    openCompareModal
  };

  // Initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    refreshAllViews();

    // Mobile navigation toggle
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("mainNavLinks");
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
      });
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("mobile-open");
        });
      });
    }
  });
})();
