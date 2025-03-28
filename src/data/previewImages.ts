import type { ImageMetadata } from "astro";
import examplePreview from "../assets/PreviewImages/solomaze.avif";

const previewImages: Record<string, ImageMetadata> = {
    example: examplePreview,
}

export default previewImages;