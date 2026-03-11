"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface Resource {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  category: string;
  readTime: number;
  contentHtml?: string;
}

const resourcesDirectory = path.join(process.cwd(), "content/resources");

export async function getAllResources(): Promise<Resource[]> {
  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(resourcesDirectory);
  const allResources = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(resourcesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        author: data.author || "Michael Moreno",
        category: data.category || "Marketing Ops",
        readTime: data.readTime || 5,
      };
    });

  return allResources.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  if (!fs.existsSync(resourcesDirectory)) {
    return null;
  }

  const fullPath = path.join(resourcesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await marked(content);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    author: data.author || "Michael Moreno",
    category: data.category || "Marketing Ops",
    readTime: data.readTime || 5,
    contentHtml,
  };
}

export async function getAllResourceSlugs(): Promise<{ slug: string }[]> {
  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(resourcesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

export async function formatResourceDate(dateStr: string): Promise<string> {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
