import { Skill, SkillCategory } from "@/types/interfaces";
import { client } from "@lib/client";
import { groq } from "next-sanity";

export async function getSkills(category: SkillCategory) {
  const query = groq`
        *[_type=="skills" && category=="${category}"]{
            _id,label,value, category
      }[]
      `;

  const data = await client.fetch(query);
  return data as Skill[];
}
