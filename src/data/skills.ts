// Skill data configuration file
// Used to manage data for the skill display page
// 技能数据在 skills.json 中，可通过 /admin/ 后台在线编辑（Decap CMS）

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

import rawSkillsData from "./skills.json";

export const skillsData: Skill[] = (rawSkillsData as { items: Skill[] }).items;
