type ImagePayload = {
  title: string;
  image: string;
};

type ImageResponse = ImagePayload & { imageId: string };

export { ImagePayload, ImageResponse };
