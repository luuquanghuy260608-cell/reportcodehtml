// Default Mock Blog Posts Seed Data
const DEFAULT_POSTS = [
  {
    id: "css-future-2026",
    title: "The Future of CSS: Subgrid, Container Queries, and Beyond",
    date: "June 24, 2026",
    readTime: "5 min read",
    category: "Technology",
    excerpt: "Explore the new horizons of web layouts. From Container Queries shifting the responsive paradigm, to Subgrid aligning nested elements effortlessly, CSS is becoming more expressive than ever.",
    likes: 42,
    comments: [
      { name: "Sarah Jenkins", text: "Container queries are a total game changer. I've already replaced several JS-based resize listeners with container query rules!", date: "June 25, 2026 at 09:14 AM" },
      { name: "Dave Miller", text: "Subgrid support across modern browsers is finally solid. Designing grid card components feels clean again.", date: "June 25, 2026 at 02:40 PM" }
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["CSS", "Web Design", "Frontend"],
    content: `
      <p>CSS is evolving at a breakneck pace. For years, developers relied on complex hacks, floats, and rigid framework grids to construct layouts. Today, modern layouts are designed with CSS Grid, Flexbox, and a host of powerful new specifications that make interfaces responsive, fluid, and expressive without leaving the stylesheet.</p>
      
      <h2>1. CSS Subgrid</h2>
      <p>For a long time, CSS Grid was limited to direct child elements. Subgrid changes everything by allowing child elements to inherit the grid tracks of their parent layout. This makes card layouts with perfectly aligned headers and footers a breeze, regardless of content variations.</p>
      <pre><code>.card-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.card {
  grid-row: span 3;
  display: grid;
  grid-template-rows: subgrid;
}</code></pre>
      
      <h2>2. Container Queries</h2>
      <p>Container queries solve the component styling issue once and for all. Instead of querying the viewport width, elements can now change their layout based on the width of their parent container. This makes a sidebar card styled differently than a full-width hero card, even if the viewport is identical.</p>
      <blockquote>
        "Container queries are the biggest revolution in responsive design since Media Queries themselves. They enable truly modular component ecosystems."
      </blockquote>
      
      <h2>3. Modern Color Manipulation</h2>
      <p>With functions like <code>color-mix()</code> and color spaces like OKLCH, we can now generate accessible palette ranges dynamically within raw CSS. It is an exciting era to build for the open web.</p>
    `
  },
  {
    id: "ui-color-harmony",
    title: "Mastering Color Harmony in UI Design",
    date: "June 22, 2026",
    readTime: "4 min read",
    category: "Design",
    excerpt: "Color is more than simple aesthetics; it shapes accessibility, user behavior, and brand trust. Discover systematic steps to construct professional color systems for applications.",
    likes: 29,
    comments: [
      { name: "Elena Rostova", text: "Perfect timing! Constructing HSL ranges makes coding light/dark variations so much easier.", date: "June 23, 2026 at 11:05 AM" }
    ],
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    tags: ["Color Theory", "UI Design", "Design Systems"],
    content: `
      <p>Color is one of the most powerful tools in a designer's arsenal. It sets the mood, directs the user's attention, and shapes the brand's identity. But creating a harmonious color palette is more science than art.</p>
      
      <h2>The HSL Advantage</h2>
      <p>While HEX and RGB are standard in development, HSL (Hue, Saturation, Lightness) is far more intuitive for creating harmonies. By shifting lightness or saturation while keeping hue constant, you can easily generate tints, shades, and active/disabled states that feel visually consistent.</p>
      <pre><code>:root {
  --primary-h: 245;
  --primary-s: 75%;
  --primary-l: 60%;
  --primary: hsl(var(--primary-h), var(--primary-s), var(--primary-l));
  --primary-hover: hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) - 10%));
}</code></pre>
      
      <h2>Accessible Contrast</h2>
      <p>Never pick colors solely based on visual appeal. Always verify contrast ratios using WCAG AA and AAA standards. Contrast ensures readability for low-vision users and improves usability under sunlight.</p>
      <blockquote>
        "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs
      </blockquote>
    `
  },
  {
    id: "second-brain-setup",
    title: "Building a Second Brain: My Workspace Setup",
    date: "June 18, 2026",
    readTime: "6 min read",
    category: "Productivity",
    excerpt: "Tired of forgetting articles, tutorials, and snippets? Here is a walkthrough of my digital note-taking workflow designed to organize creative input into clear output.",
    likes: 56,
    comments: [
      { name: "John Doe", text: "Tiago Forte's book changed my productivity layout. Nice distillation!", date: "June 20, 2026 at 04:12 PM" }
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["Productivity", "Workspace", "Note-taking"],
    content: `
      <p>As builders and creators, we are constantly bombarded with information: tutorials, newsletters, podcasts, and documentation. Without a system to capture and connect these ideas, they simply slip away. That's where the concept of a "Second Brain" comes in.</p>
      
      <h2>The CODE Methodology</h2>
      <p>Popularized by productivity expert Tiago Forte, the CODE framework stands for:</p>
      <ul>
        <li><strong>Capture:</strong> Keep only what resonates (notes, quotes, code snippets).</li>
        <li><strong>Organize:</strong> Structure for actionability, categorizing by active projects.</li>
        <li><strong>Distill:</strong> Find the core essence. Bold key terms, create highlights.</li>
        <li><strong>Express:</strong> Publish your ideas, build projects, and write summaries.</li>
      </ul>
      
      <h2>Tool Stack Selection</h2>
      <p>The tools don't matter as much as the habits. Whether you choose Obsidian, Notion, Apple Notes, or plain markdown files in a Git repository, the key is consistency. Define simple intake triggers to avoid cataloging junk.</p>
    `
  },
  {
    id: "five-years-developer",
    title: "Reflecting on 5 Years as a Creative Developer",
    date: "June 10, 2026",
    readTime: "7 min read",
    category: "Journal",
    excerpt: "Important lessons learned from shifting between startup environments, agency contracts, and open source development. What really matters in the software industry.",
    likes: 83,
    comments: [
      { name: "Marcus Aurelius", text: "Incredibly grounding advice. Focusing on solving problems over framework hype is crucial.", date: "June 11, 2026 at 08:33 AM" },
      { name: "Clara", text: "This resonates deeply. Junior developers focus on code; senior developers focus on value.", date: "June 12, 2026 at 09:20 AM" }
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    tags: ["Career", "Mentorship", "Software Engineering"],
    content: `
      <p>Five years ago, I wrote my first line of professional code. It was a messy jQuery script that handled form validation. Since then, the web landscape has shifted completely, and so has my perspective on what makes a great developer.</p>
      
      <h2>Focus on User Experience, Not Just Code</h2>
      <p>When starting out, we often obsess over frameworks, build systems, and syntax. But users don't care what stack you used. They care about performance, accessibility, and intuitive interactions. Focus on shipping values.</p>
      <blockquote>
        "The best code is the code that is never written. Focus on solving problems with minimal complexity."
      </blockquote>
      
      <h2>Cultivate Communication</h2>
      <p>Your ability to explain complex code to non-technical partners is as critical as your coding skills. Writing clear pull requests, documenting architectures, and active listening are standard keys to success.</p>
    `
  }
];

// Application State
let posts = [];
let bookmarks = [];
let currentCategory = "all"; // 'all', 'Technology', 'Design', etc., or 'bookmarks'
let searchQuery = "";
let likedPosts = []; // IDs of posts liked by this user

// DOM Cache
const postGrid = document.getElementById("post-grid");
const gridTitle = document.getElementById("grid-title");
const gridStatus = document.getElementById("grid-status");
const noPostsView = document.getElementById("no-posts-view");
const searchInput = document.getElementById("search-input");
const filterTabsContainer = document.getElementById("filter-tabs");

const navAll = document.getElementById("nav-all");
const navBookmarked = document.getElementById("nav-bookmarked");
const navLogo = document.getElementById("nav-logo");

// Modal DOM Cache
const postModal = document.getElementById("post-modal");
const modalProgress = document.getElementById("modal-progress");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalShareBtn = document.getElementById("modal-share-btn");
const modalBookmarkBtn = document.getElementById("modal-bookmark-btn");
const modalCover = document.getElementById("modal-cover");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalReadTime = document.getElementById("modal-read-time");
const modalArticleContent = document.getElementById("modal-article-content");
const modalLikeBtn = document.getElementById("modal-like-btn");
const modalLikesCount = document.getElementById("modal-likes-count");
const modalCommentToggle = document.getElementById("modal-comment-toggle");
const modalCommentsCount = document.getElementById("modal-comments-count");
const modalCommentsHeadingCount = document.getElementById("modal-comments-heading-count");
const commentsList = document.getElementById("comments-list");
const commentForm = document.getElementById("comment-form");

const themeToggle = document.getElementById("theme-toggle");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const toastContainer = document.getElementById("toast-container");

// Active modal tracking
let activePostId = null;

// Initialize Application
function init() {
  // Load State from LocalStorage
  const storedPosts = localStorage.getItem("blog_posts");
  if (storedPosts) {
    posts = JSON.parse(storedPosts);
  } else {
    posts = DEFAULT_POSTS;
    localStorage.setItem("blog_posts", JSON.stringify(posts));
  }

  const storedBookmarks = localStorage.getItem("blog_bookmarks");
  if (storedBookmarks) {
    bookmarks = JSON.parse(storedBookmarks);
  } else {
    bookmarks = [];
  }

  const storedLikes = localStorage.getItem("blog_likes");
  if (storedLikes) {
    likedPosts = JSON.parse(storedLikes);
  } else {
    likedPosts = [];
  }

  // Restore Theme preference
  const storedTheme = localStorage.getItem("blog_theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);

  // Setup Event Listeners
  setupEventListeners();

  // Render Grid
  renderGrid();
}

// Setup Interaction Event Listeners
function setupEventListeners() {
  // Search bar input listener
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderGrid();
  });

  // Category filter tabs
  filterTabsContainer.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    // Toggle active state
    document.querySelectorAll(".filter-tab").forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    // Remove nav bar selection to focus on category view
    navAll.classList.add("active");
    navBookmarked.classList.remove("active");

    currentCategory = tab.dataset.category;
    renderGrid();
  });

  // Navigation Links
  navAll.addEventListener("click", () => {
    currentCategory = "all";
    navAll.classList.add("active");
    navBookmarked.classList.remove("active");
    
    // Reset category tabs to "All"
    document.querySelectorAll(".filter-tab").forEach(btn => btn.classList.remove("active"));
    document.querySelector('.filter-tab[data-category="all"]').classList.add("active");
    
    renderGrid();
  });

  navBookmarked.addEventListener("click", () => {
    currentCategory = "bookmarks";
    navAll.classList.remove("active");
    navBookmarked.classList.add("active");
    renderGrid();
  });

  navLogo.addEventListener("click", (e) => {
    e.preventDefault();
    currentCategory = "all";
    navAll.classList.add("active");
    navBookmarked.classList.remove("active");
    document.querySelectorAll(".filter-tab").forEach(btn => btn.classList.remove("active"));
    document.querySelector('.filter-tab[data-category="all"]').classList.add("active");
    searchInput.value = "";
    searchQuery = "";
    renderGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Modal actions
  modalCloseBtn.addEventListener("click", closeModal);
  
  // Close modal when clicking outside contents
  postModal.addEventListener("click", (e) => {
    if (e.target === postModal) {
      closeModal();
    }
  });

  // Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && postModal.classList.contains("active")) {
      closeModal();
    }
  });

  // Modal buttons
  modalLikeBtn.addEventListener("click", () => {
    if (activePostId) toggleLike(activePostId);
  });

  modalBookmarkBtn.addEventListener("click", () => {
    if (activePostId) toggleBookmark(activePostId);
  });

  modalShareBtn.addEventListener("click", () => {
    if (activePostId) copyShareLink(activePostId);
  });

  // Comment submission form
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("comment-name");
    const emailInput = document.getElementById("comment-email");
    const textInput = document.getElementById("comment-text");

    if (activePostId && nameInput.value.trim() && textInput.value.trim()) {
      addComment(activePostId, nameInput.value.trim(), emailInput.value.trim(), textInput.value.trim());
      nameInput.value = "";
      emailInput.value = "";
      textInput.value = "";
    }
  });

  // Smooth Comments Scroll on comment toggle click
  modalCommentToggle.addEventListener("click", () => {
    const commentsEl = document.getElementById("comments-section");
    if (commentsEl) {
      commentsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // Dark/Light Theme toggling
  themeToggle.addEventListener("click", toggleTheme);

  // Newsletter signup Form submission
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();
    if (email) {
      newsletterEmail.value = "";
      showToast("Successfully subscribed to the newsletter!", "success");
    }
  });
}

// Render the grid layout of post cards
function renderGrid() {
  postGrid.innerHTML = "";
  
  // Filter core posts array based on active rules
  let filtered = [...posts];

  if (currentCategory === "bookmarks") {
    gridTitle.textContent = "Bookmarked Articles";
    filtered = filtered.filter(post => bookmarks.includes(post.id));
  } else if (currentCategory !== "all") {
    gridTitle.textContent = `${currentCategory} Articles`;
    filtered = filtered.filter(post => post.category === currentCategory);
  } else {
    gridTitle.textContent = "Latest Articles";
  }

  // Filter based on search query
  if (searchQuery) {
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.category.toLowerCase().includes(searchQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
    );
  }

  // Set grid counts
  gridStatus.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'}`;

  // Handle empty state
  if (filtered.length === 0) {
    postGrid.style.display = "none";
    noPostsView.style.display = "block";
    return;
  } else {
    postGrid.style.display = "grid";
    noPostsView.style.display = "none";
  }

  // Generate cards
  filtered.forEach(post => {
    const isBookmarked = bookmarks.includes(post.id);
    const card = document.createElement("div");
    card.className = "post-card";
    card.dataset.id = post.id;

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${post.image}" alt="${post.title}" class="card-img" loading="lazy">
        <span class="card-badge">${post.category}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${post.date}</span>
          <span class="card-meta-dot"></span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-excerpt">${post.excerpt}</p>
        <div class="card-footer">
          <div class="card-author">
            <img src="avatar.png" alt="Alex Mercer avatar" class="author-avatar" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'">
            <span class="author-name">Alex Mercer</span>
          </div>
          <div class="card-actions">
            <button class="card-btn bookmark-btn ${isBookmarked ? 'active' : ''}" data-action="bookmark" aria-label="Bookmark article">
              <i data-lucide="bookmark" style="width: 18px; height: 18px; fill: ${isBookmarked ? 'currentColor' : 'none'};"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    // Click handler to open details view
    card.addEventListener("click", (e) => {
      // If clicking bookmark button inside card, don't open details modal
      const actionButton = e.target.closest(".card-btn");
      if (actionButton) {
        e.stopPropagation();
        const action = actionButton.dataset.action;
        if (action === "bookmark") {
          toggleBookmark(post.id);
        }
        return;
      }
      openModal(post.id);
    });

    postGrid.appendChild(card);
  });

  // Re-generate Lucide icon elements
  lucide.createIcons();
}

// Open Full-Screen Article Reader Modal
function openModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  activePostId = postId;

  // Set Details UI
  modalCover.src = post.image;
  modalCover.alt = post.title;
  modalCategory.textContent = post.category;
  modalTitle.textContent = post.title;
  modalDate.textContent = post.date;
  modalReadTime.textContent = post.readTime;
  modalArticleContent.innerHTML = post.content;
  modalLikesCount.textContent = post.likes;
  
  // Set Likes button state
  if (likedPosts.includes(postId)) {
    modalLikeBtn.classList.add("active");
  } else {
    modalLikeBtn.classList.remove("active");
  }

  // Set Bookmark button state
  if (bookmarks.includes(postId)) {
    modalBookmarkBtn.classList.add("active");
    modalBookmarkBtn.querySelector("i").style.fill = "currentColor";
  } else {
    modalBookmarkBtn.classList.remove("active");
    modalBookmarkBtn.querySelector("i").style.fill = "none";
  }

  // Render comments
  renderComments(post.comments);

  // Lock Page scroll while modal is active
  document.body.style.overflow = "hidden";

  // Show modal
  postModal.classList.add("active");
  
  // Reset scrolling progress indicator
  modalProgress.style.width = "0%";
  
  // Attach scroll handler for reading progress tracker
  postModal.addEventListener("scroll", handleModalScroll);
  
  lucide.createIcons();
}

// Close Reader Modal
function closeModal() {
  postModal.classList.remove("active");
  document.body.style.overflow = "";
  postModal.removeEventListener("scroll", handleModalScroll);
  activePostId = null;
  // Sync bookmarks / state back to page card layouts
  renderGrid();
}

// Modal Scroll progress listener
function handleModalScroll() {
  const scrollTop = postModal.scrollTop;
  // Calculate total scrollable height inside the modal layout
  const scrollHeight = postModal.scrollHeight - postModal.clientHeight;
  const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  modalProgress.style.width = `${percent}%`;
}

// Toggle Bookmarking state
function toggleBookmark(postId) {
  const idx = bookmarks.indexOf(postId);
  if (idx > -1) {
    bookmarks.splice(idx, 1);
    showToast("Removed from bookmarks.", "info");
  } else {
    bookmarks.push(postId);
    showToast("Added to bookmarks!", "success");
  }

  // Save state
  localStorage.setItem("blog_bookmarks", JSON.stringify(bookmarks));

  // Sync button styling inside Modal if active
  if (activePostId === postId) {
    const isBookmarked = bookmarks.includes(postId);
    if (isBookmarked) {
      modalBookmarkBtn.classList.add("active");
      modalBookmarkBtn.querySelector("i").style.fill = "currentColor";
    } else {
      modalBookmarkBtn.classList.remove("active");
      modalBookmarkBtn.querySelector("i").style.fill = "none";
    }
  }

  // Refresh grid cards display
  renderGrid();
}

// Toggle Likes count
function toggleLike(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const idx = likedPosts.indexOf(postId);
  if (idx > -1) {
    likedPosts.splice(idx, 1);
    post.likes--;
    modalLikeBtn.classList.remove("active");
  } else {
    likedPosts.push(postId);
    post.likes++;
    modalLikeBtn.classList.add("active");
    
    // Animate heart click scale bump
    modalLikeBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
      modalLikeBtn.style.transform = "";
    }, 150);
  }

  modalLikesCount.textContent = post.likes;

  // Persist likes update
  localStorage.setItem("blog_likes", JSON.stringify(likedPosts));
  localStorage.setItem("blog_posts", JSON.stringify(posts));
}

// Render comments in discussion list
function renderComments(comments) {
  commentsList.innerHTML = "";
  modalCommentsCount.textContent = comments.length;
  modalCommentsHeadingCount.textContent = comments.length;

  if (comments.length === 0) {
    commentsList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.95rem; text-align: center; padding: 20px 0;">No comments yet. Start the conversation!</p>`;
    return;
  }

  comments.forEach(comment => {
    // Generate initial initials avatar
    const initials = comment.name ? comment.name.substring(0, 2).toUpperCase() : "?";
    
    const commentEl = document.createElement("div");
    commentEl.className = "comment-item";
    commentEl.innerHTML = `
      <div class="comment-avatar">${initials}</div>
      <div class="comment-details">
        <div class="comment-header">
          <span class="comment-author-name">${comment.name}</span>
          <span class="comment-date">${comment.date}</span>
        </div>
        <div class="comment-body">${comment.text}</div>
      </div>
    `;
    commentsList.appendChild(commentEl);
  });
}

// Add comment to post
function addComment(postId, name, email, text) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  // Simple date format string
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const dateStr = now.toLocaleDateString('en-US', options);

  const newComment = {
    name: name,
    text: text,
    date: dateStr
  };

  post.comments.push(newComment);

  // Save states
  localStorage.setItem("blog_posts", JSON.stringify(posts));

  // Render and toast feedback
  renderComments(post.comments);
  showToast("Comment published!", "success");
}

// Generate share links and copy to Clipboard
function copyShareLink(postId) {
  // Construct a share URL (using hash anchors so it redirects properly in this SPA layout)
  const shareUrl = `${window.location.origin}${window.location.pathname}#post-${postId}`;
  
  navigator.clipboard.writeText(shareUrl)
    .then(() => {
      showToast("Article share link copied to clipboard!", "success");
    })
    .catch(() => {
      // Fallback display if clipboard permission denied
      showToast("Could not copy link. Share URL: " + shareUrl, "info");
    });
}

// Trigger Toast alert notifications
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = "toast";
  
  let icon = "info";
  if (type === "success") icon = "check-circle";
  if (type === "warning") icon = "alert-triangle";

  toast.innerHTML = `
    <i data-lucide="${icon}" style="width: 18px; height: 18px; color: ${type === 'success' ? '#10b981' : 'var(--accent-color)'};"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  lucide.createIcons();

  // Remove toast from DOM automatically after animation ends
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Toggle Dark & Light Themes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("blog_theme", newTheme);
  
  showToast(`Switched to ${newTheme} mode`, "info");
}

// Initialize Application once DOM contents load
document.addEventListener("DOMContentLoaded", init);
