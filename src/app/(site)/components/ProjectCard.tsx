import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  category: string;
  image: string;
};

export default function ProjectCard({ title, category, image }: Props) {
  return (
    <Card className="hover:shadow-md transition-shadow bg-white">
      <CardHeader>
        <CardTitle className="text-base text-[oklch(0.35_0_0)]">{category}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="aspect-[4/3] relative overflow-hidden rounded-md">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="text-xl font-medium">{title}</div>
      </CardContent>
    </Card>
  );
}


