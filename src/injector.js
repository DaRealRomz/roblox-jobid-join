chrome.runtime.sendMessage("getUrl").then((initialUrl) => {
  if (!initialUrl) return;
  const url = new URL(initialUrl);
  const jobId = url.searchParams.get("serverJobId");
  const placeId = url.pathname.match(/\/(\d+)\/.+?$/)[1];
  if (placeId && jobId) {
    const script = document.createElement("script");
    script.id = "jobIdLaunch";
    script.type = "text/javascript";
    script.src = chrome.runtime.getURL("launch.js");
    script.setAttribute("data-place-id", placeId);
    script.setAttribute("data-job-id", jobId);
    document.body.appendChild(script);
  }
});
