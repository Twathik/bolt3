export const orthancViewerBaseUrl =
  process.env.NODE_ENV === "production"
    ? "http://orthanc:8042/osimis-viewer/app/index.html?study="
    : "http://localhost:8042/osimis-viewer/app/index.html?study=";
