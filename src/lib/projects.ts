import { Project } from "@/types/interfaces";
import { client } from "@lib/client";
import { groq } from "next-sanity";

export async function getProjects() {
  const query = groq`
    *[_type=="projects"]{
      _id,
      title,
      description,
      images,
      tags,
      demoLink,
      githubLink,
      publishedAt,
      isResponsive
    }
  `;

  const data = await client.fetch(query);
  return {
    data: data as Project[],
    revalidate: 60 // Set the revalidation time in seconds
  };
}
