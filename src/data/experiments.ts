import type { ImageMetadata } from "astro"
import  previews from "./previewImages"

interface Experiment {
    slug: string,
    title: string,
    description: string,
    image?: ImageMetadata,
    tags?: string[]

}

export const experiments: Experiment[] = [
    {
        slug: "Example/example",
        title: "Example 1",
        description: "An example item's description",
        image: previews.example,
        tags: ["example"]
    },
    {
        slug: "Example/example",
        title: "Example 2",
        description: "This is the second example. It has a utility tag and a large description. Check text wrapping and general font measurements here.",
        image: previews.example,
        tags: ["utility"]
    },
    {
        slug: "Example/example",
        title: "Example 3",
        description: "Another example. Has utility tag.",
        image: previews.example,
        tags: ["utility"]
    },
    {
        slug: "Transitions/transition1",
        title: "transition 1",
        description: "preview transition.",
        image: previews.example,
        tags: ["transition"]
    }
]