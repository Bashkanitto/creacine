import React from 'react'

type SkeletonProps = {
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = () => {
  return <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded" />
}

export default Skeleton
