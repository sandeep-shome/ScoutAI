import OrgCard from "@/components/org-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h3 className="text-sm text-neutral-600">
          Start hiring by creating new organization
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create organization</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Organization</DialogTitle>
              <DialogDescription>
                Create your organization. Click create when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right">
                  Org. Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder="Ex: Codevita, codesummit, etc..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right">
                  Org. Description
                </Label>
                <Textarea className="w-full h-28 resize-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right">
                  Org. type
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="apple">Technology</SelectItem>
                      <SelectItem value="banana">Teaching</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-10">
        <h3 className="text-sm text-neutral-600">
          Previously created hiring organizations
        </h3>
        <div className="w-full grid grid-cols-4 mt-5">
          <OrgCard />
        </div>
      </div>
    </div>
  );
};

export default page;
