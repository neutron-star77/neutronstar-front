import type { TimelineItem } from "../components/features/timeline/types";

// 时间线数据在 timeline.json 中，可通过 /admin/ 后台在线编辑（Decap CMS）
import rawTimelineData from "./timeline.json";

export const timelineData: TimelineItem[] = (
	rawTimelineData as { items: TimelineItem[] }
).items;
