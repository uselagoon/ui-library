import { MaintenanceData } from '@/components/Banner/Banner';

type HandlerFunction = (data?: MaintenanceData) => void;

class PluginBridge {
	private listeners: Map<string, Set<HandlerFunction>> = new Map();

	subscribe(eventType: string, handler: HandlerFunction) {
		if (!this.listeners.has(eventType)) {
			this.listeners.set(eventType, new Set());
		}
		this.listeners.get(eventType)!.add(handler);
		return () => this.unsubscribe(eventType, handler);
	}

	unsubscribe(eventType: string, handler: HandlerFunction) {
		this.listeners.get(eventType)?.delete(handler);
	}

	publish(eventType: string, data?: MaintenanceData) {
		const handlers = this.listeners.get(eventType);
		if (handlers) {
			handlers.forEach(handler => handler(data));
		}
	}
}

const pluginBridge = new PluginBridge();

declare global {
	interface Window {
		__pluginBridge: PluginBridge;
	}
}

if (typeof window !== 'undefined') {
	window.__pluginBridge = pluginBridge;
}

export default pluginBridge;