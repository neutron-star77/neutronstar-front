import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "站点公告",
	content: "NeutronStar 博客全新改版上线！本站基于 Astro 构建，文章与站点数据（友链/项目/技能等）均可在后台在线编辑。",
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "了解更多", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};
