import type { ImageMetadata } from "astro"
import  previews from "./previewImages"

interface Experiment {
    slug: string,
    title: string,
    description: string,
    image: ImageMetadata,
    tags?: string[]

}

export const experiments: Experiment[] = [
    {
        slug: "Example1",
        title: "Example1",
        description: "An example item's description",
        image: previews.example,
        tags: ["example", "utility"]
    }
]