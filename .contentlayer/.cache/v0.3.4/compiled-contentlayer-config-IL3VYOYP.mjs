// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    categories: { type: "list", of: { type: "string" }, required: true },
    gambar: { type: "string", required: true },
    penulis: { type: "string", required: true },
    link: { type: "string", required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "posts", documentTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IL3VYOYP.mjs.map
