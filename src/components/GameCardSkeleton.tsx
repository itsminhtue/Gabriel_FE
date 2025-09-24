import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root width={"300px"}>
        <Skeleton height={"200px"}>
            <Card.Body>
                <SkeletonText />
            </Card.Body>
        </Skeleton>
    </Card.Root>
  )
}

export default GameCardSkeleton
