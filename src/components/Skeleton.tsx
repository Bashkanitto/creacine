import React from 'react'

type SkeletonProps = {
  width: number | string
  height: number | string
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  return (
    <div
      style={{ width: width, height: height }}
      className="animate-pulse bg-gray-300 rounded-md"
    />
  )
}

export default Skeleton
