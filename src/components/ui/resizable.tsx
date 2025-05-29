import * as React from 'react';
import { GripVerticalIcon } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/lib/utils';

function ResizablePanelGroup({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
	return (
		<ResizablePrimitive.PanelGroup
			data-slot="resizable-panel-group"
			className={cn('lib:flex lib:h-full lib:w-full data-[panel-group-direction=vertical]:lib:flex-col', className)}
			{...props}
		/>
	);
}

function ResizablePanel({ ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
	return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
	withHandle,
	className,
	...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
	withHandle?: boolean;
}) {
	return (
		<ResizablePrimitive.PanelResizeHandle
			data-slot="resizable-handle"
			className={cn(
				'lib:bg-border focus-visible:lib:ring-ring lib:relative lib:flex lib:w-px lib:items-center lib:justify-center after:lib:absolute after:lib:inset-y-0 after:lib:left-1/2 after:lib:w-1 after:lib:-translate-x-1/2 focus-visible:lib:ring-1 focus-visible:lib:ring-offset-1 focus-visible:lib:outline-hidden data-[panel-group-direction=vertical]:lib:h-px data-[panel-group-direction=vertical]:lib:w-full data-[panel-group-direction=vertical]:after:lib:left-0 data-[panel-group-direction=vertical]:after:lib:h-1 data-[panel-group-direction=vertical]:after:lib:w-full data-[panel-group-direction=vertical]:after:lib:-translate-y-1/2 data-[panel-group-direction=vertical]:after:lib:translate-x-0 [&[data-panel-group-direction=vertical]>div]:lib:rotate-90',
				className,
			)}
			{...props}
		>
			{withHandle && (
				<div className="lib:bg-border lib:z-10 lib:flex lib:h-4 lib:w-3 lib:items-center lib:justify-center lib:rounded-xs lib:border">
					<GripVerticalIcon className="lib:size-2.5" />
				</div>
			)}
		</ResizablePrimitive.PanelResizeHandle>
	);
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
