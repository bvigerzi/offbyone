export interface PostFrontmatter {
  title: string;
  description?: string;
  pubDate: Date;
  updatedDate?: Date;
  draft?: boolean;
  tags?: string[];
}

export interface PostEntry {
  id: string;
  data: PostFrontmatter;
  body?: string;
}
