import type { ProfileConfig } from "../types/config";

// 个人资料配置（侧边栏/关于页显示）
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录。
	name: "NeutronStar",
	bio: "星舰 · 技术博客 —— 科技、阅读、杂谈与一切值得记录的东西",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/neutron-star77",
		},
		{
			name: "Email",
			icon: "mdi:email",
			url: "mailto:hello@neutronstar.fun",
		},
	],
};
