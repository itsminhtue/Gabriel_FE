import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
   let color = score > 90 ? "green" : score > 80 ? "yellow" : "purple"
    return (
    <Badge 
    variant={"surface"}
    size={"md"}
    py={2}
    borderRadius={"7px"}
    colorPalette={color}>{score}
    </Badge>
    )
};

export default CriticScore;