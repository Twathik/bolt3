import * as Minio from "minio";

export const s3Client = new Minio.Client({
  endPoint: "storage.bolt3.local",
  port: 9000,
  accessKey: "test",
  secretKey: "12345678",
  useSSL: false,
});
