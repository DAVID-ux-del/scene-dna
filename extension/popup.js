const apiKeyEl = document.getElementById("apiKey");
const status = document.getElementById("status");

chrome.storage.local.get("apiKey").then(({ apiKey }) => {
  if (apiKey) apiKeyEl.value = apiKey;
});

document.getElementById("toggle").addEventListener("click", (event) => {
  apiKeyEl.type = apiKeyEl.type === "password" ? "text" : "password";
  const visible = apiKeyEl.type === "text";
  event.currentTarget.setAttribute("aria-pressed", String(visible));
  event.currentTarget.setAttribute("aria-label", visible ? "隐藏 API Key" : "显示 API Key");
  event.currentTarget.title = visible ? "隐藏 API Key" : "显示 API Key";
});

document.getElementById("save").addEventListener("click", async () => {
  const key = apiKeyEl.value.trim();
  if (!key) {
    status.textContent = "请先填 API Key";
    status.className = "status err";
    return;
  }
  await chrome.storage.local.set({ apiKey: key });
  status.textContent = "已保存 ✓ 去图片上右键用 SceneDNA 解析";
  status.className = "status ok";
  setTimeout(() => (status.textContent = ""), 2000);
});

apiKeyEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") document.getElementById("save").click();
});

document.getElementById("more").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});
