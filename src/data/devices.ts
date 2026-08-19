export interface Device {
	name: string;
	icon: string;
	description: string;
	specs: string[];
	url?: string;
	tags?: string[];
}

export type DeviceCategory = Record<string, Device[]>;

// 设备数据在 devices.json 中，可通过 /admin/ 后台在线编辑（Decap CMS）
// JSON 结构为 { items: [{ category, devices: [...] }] }，此处转换为
// Record<string, Device[]>（与页面组件 Object.keys(devices) 的用法兼容）
import rawDevicesData from "./devices.json";

export const devicesData: DeviceCategory = Object.fromEntries(
	(rawDevicesData as { items: { category: string; devices: Device[] }[] }).items.map(
		(group) => [group.category, group.devices],
	),
);
