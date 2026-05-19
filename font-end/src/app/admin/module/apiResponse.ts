export interface ApiResponse<T>{
    code: number;
    message?: string;
    result?: T;
}
  export interface ImageRequest {
    fileName: string;
    filePath: string;
    phash: string;
  }
   
  export interface UploadProgress {
    progress: number;
    data?: ImageResponse;
  }

  export interface ImageResponse {
    id: string;          // UUID từ backend dạng chuỗi
    fileName: string;    // Khớp với file_name
    filePath: string;    // Khớp với file_path (đường dẫn ảnh)
    imageUrl?: string;
    phash: string;       // Chuỗi băm nhận diện ảnh tương đồng
    createdAt: string;   // Khớp với created_at (Dạng ISO string từ backend trả về)
  }