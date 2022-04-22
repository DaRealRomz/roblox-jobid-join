(function main() {
  const launch = document.getElementById("jobIdLaunch");
  const jobId = launch.getAttribute("data-job-id");
  const placeId = launch.getAttribute("data-place-id");
  window.Roblox.GameLauncher.joinGameInstance(placeId, jobId);
})();
