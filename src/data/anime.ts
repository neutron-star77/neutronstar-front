// 本地番剧数据配置
// 数据存放在 anime.json 中，可通过 /admin/ 后台在线编辑（Decap CMS）
import rawAnimeData from "./anime.json";

export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = (rawAnimeData as { items: AnimeItem[] }).items;

export default localAnimeList;
