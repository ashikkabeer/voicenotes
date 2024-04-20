import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
export default function Task() {
  return (
    <>
      <div className="tasks">
        <ScrollArea>
        <Card className="border-card-foreground">
          <CardHeader>
            <CardTitle className="flex gap-x-3">
              <Badge variant="outline">45 mins</Badge>
              <Badge variant="outline">Ashik Kabeer</Badge>
              
            </CardTitle>
            <p className="font-bold">Love-Kind Meditation</p>
          </CardHeader>
          <CardContent className=" h-28 overflow-hidden ">
            <p className="line-clamp-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore, doloremque corrupti facilis incidunt doloribus accusantium quasi! Rem facilis aut inventore voluptatibus cumque, illum doloribus debitis consectetur ipsa at exercitationem sequi facere animi explicabo amet quibusdam nesciunt quod quasi tenetur nobis sed provident nihil vitae. Velit perspiciatis amet placeat atque consectetur repudiandae repellat adipisci laudantium itaque exercitationem ullam eligendi incidunt recusandae cum, ipsam nisi.</p>
          </CardContent>
        </Card>
        </ScrollArea>
      </div>
    </>
  );
}
