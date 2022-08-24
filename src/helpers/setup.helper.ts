export function getServer() {
  //direccion ip del servidor
  return "http://localhost:3009"
};

export function compressImg(imgn: any, quality: number): Promise<any> {
  return new Promise<any>((resolve) => {
    const $canvas = document.createElement("canvas");
    const img = new Image();
    img.onload = () => {
      $canvas.width = img.width;
      $canvas.height = img.height;
      $canvas.getContext("2d")!.drawImage(img, 0, 0);
      $canvas.toBlob((blob) => {
        if (blob !== null) {
          resolve(blob);
        }
      },
      "image/jpeg",
      quality / 100
      );
    };
    img.src = URL.createObjectURL(imgn);
  });
};