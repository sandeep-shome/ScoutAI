import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Edit,
  EllipsisVertical,
  ExternalLink,
  Settings,
  Trash,
} from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Page = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-2">
            <h3 className="text-neutral-700">Organization name</h3>
            <Badge variant={"outline"}>Technology</Badge>
          </div>
          <p className="text-sm text-neutral-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eum a
            enim.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-neutral-600">
            Created on: <span>12-05-2025</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-neutral-600">Status:</p>
            <Badge variant={"destructive"}>Pending</Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <div className="">
          <Button variant={"secondary"}>
            <Edit className="size-4 text-neutral-600" />
            Recruitment criteria
          </Button>
        </div>
        <div className="flex items-center gap-1.5">
          <Button>Add candidate</Button>
          <Button variant={"secondary"} disabled>
            Start sorting
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <Settings className="size-4 text-neutral-600" />
          </Button>
        </div>
      </div>

      <div className="w-full mt-6">
        <Table>
          <TableCaption>A list of your candidates</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead className="">Email</TableHead>
              <TableHead className="text-center">Resume Link</TableHead>
              <TableHead className="text-center">Resume score</TableHead>
              <TableHead className="text-center">Overall score</TableHead>
              <TableHead className="text-center">Hiring rate</TableHead>
              <TableHead className="text-center">Interview schedule</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Example Example</TableCell>
              <TableCell>example123@email.com</TableCell>
              <TableCell className="text-center">
                <Link
                  href={"#"}
                  className="flex items-center gap-2 justify-center"
                >
                  Resume
                  <ExternalLink className="size-4 text-neutral-600" />
                </Link>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={"destructive"}>Pending</Badge>
              </TableCell>
              <TableCell className="text-center">0.0</TableCell>
              <TableCell className="text-center">
                <Badge variant={"secondary"}>0%</Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={"destructive"}>Pending</Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                  >
                    <EllipsisVertical className="size-4 text-neutral-600" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2">
                      <ExternalLink className="size-4 text-neutral-500" />
                      Analytics
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Edit className="size-4 text-neutral-500" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Trash className="size-4 text-neutral-500" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
