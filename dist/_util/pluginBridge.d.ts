import { MaintenanceData } from '../components/Banner/Banner';
type HandlerFunc<T = any> = (data: T) => void;
type Events = {
    'maintenance:update': MaintenanceData;
};
declare class PluginBridge {
    private listeners;
    getRegisteredEvents(): string[];
    subscribe<E extends keyof Events>(eventType: E, handler: HandlerFunc<Events[E]>): () => void;
    unsubscribe<E extends keyof Events>(eventType: E, handler: HandlerFunc<Events[E]>): void;
    publish<E extends keyof Events>(eventType: E, data: Events[E]): void;
}
declare const pluginBridge: PluginBridge;
declare global {
    interface Window {
        __pluginBridge: PluginBridge;
    }
}
export default pluginBridge;
//# sourceMappingURL=pluginBridge.d.ts.map