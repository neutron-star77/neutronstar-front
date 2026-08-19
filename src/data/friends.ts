// 友情链接数据配置
// 用于管理友情链接页面的数据（数据在 friends.json 中，可通过 /admin/ 后台在线编辑）
// 友链格式：
// {
//   id: 1,
//   title: "友链名称",
//   imgurl: "https://example.com/avatar.png",
//   desc: "一句话介绍",
//   siteurl: "https://example.com",
//   tags: ["博客"],
// }
import rawFriendsData from "./friends.json";

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = (
	rawFriendsData as { items: FriendItem[] }
).items;

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
