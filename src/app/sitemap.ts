import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: "/",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `/playground/editorjs`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `/playground/monaco`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `/playground/quill`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
    ]
}
