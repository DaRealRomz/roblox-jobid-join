(function main() {
  const params = new URLSearchParams(window.location.search);
  const jobId = params.get("serverJobId");
  if (jobId) {
    const placeId = window.location.pathname.match(/\/(\d+)\/.+?$/)[1];
    window.Roblox.GameLauncher.joinGameInstance(placeId, jobId);
  }
})();
