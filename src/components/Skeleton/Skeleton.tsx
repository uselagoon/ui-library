import { FC } from 'react';
import { default as LoadingSkeleton, SkeletonProps } from 'react-loading-skeleton';

const Skeleton: FC<SkeletonProps> = (props: SkeletonProps) => {
	return <LoadingSkeleton {...props} />;
};

export type { SkeletonProps };
export default Skeleton;
