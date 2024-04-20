import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
export default function Select() {
  return (
    <>
      <div className=" h-full w-full">
        <div className="input">
          <Input className="" placeholder="Search" />
        </div>
        <div className="btns py-5 flex gap-3">
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 p-4">
              <Button variant="outline">#Mood Swings</Button>
              <Button variant="outline">#Stress</Button>
              <Button variant="outline">#Anxiety</Button>
              <Button variant="outline">#Depression</Button>
              <Button variant="outline">#Insomnia</Button>
              <Button variant="outline">#Fatigue</Button>
              <Button variant="outline">#Irritability</Button>
              <Button variant="outline">#Lack of Concentration</Button>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
