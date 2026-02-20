import { MaintenanceData } from '@/components/Banner/Banner';

type HandlerFunc<T = any> = (data: T) => void;

type Events = {
	'maintenance:update': MaintenanceData;
}

class PluginBridge {
	private listeners: Map<string, Set<HandlerFunc>> = new Map();

	getRegisteredEvents(): string[] {
		return Array.from(this.listeners.keys());
	}

	subscribe<E extends keyof Events>(eventType: E, handler: HandlerFunc<Events[E]>) {
		if (!this.listeners.has(eventType)) {
			this.listeners.set(eventType, new Set());
		}
		this.listeners.get(eventType)!.add(handler as HandlerFunc);
		return () => this.unsubscribe(eventType, handler);
	}

	unsubscribe<E extends keyof Events>(eventType: E, handler: HandlerFunc<Events[E]>) {
		this.listeners.get(eventType)?.delete(handler as HandlerFunc);
	}

	publish<E extends keyof Events>(eventType: E, data: Events[E]) {
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