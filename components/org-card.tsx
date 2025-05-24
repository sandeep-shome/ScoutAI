import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const OrgCard: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Organization Name</CardTitle>
          <CardDescription>Organization Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            quidem fuga, deleniti vero reiciendis totam omnis!
          </p>
        </CardContent>
        <CardFooter>
          <Button>
            Visit <ExternalLink className="size-3" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default OrgCard;
