/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pE1OiEfTzyz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { JSX, SVGProps } from "react";
import { Section } from "../_landing/Section";
import NavBar from "../_landing/NavBar";

export default function Component() {
  return (
    <Section>
      <NavBar />
      <div className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20">
        <div className="space-y-6">
          <a href="/">
            <Button variant="outline">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </a>

          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Upload a Video
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Add a new video to your collection.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-md border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <UploadIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                Drag and drop your video here or{" "}
                <span className="text-blue-500 font-medium">browse</span>
              </p>
            </div>
            <div className="w-full space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter a title" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter a description"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Add tags (separated by commas)" />
              </div>
              <div>
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-16 rounded-md overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width={96}
                      height={64}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button variant="secondary">Upload Thumbnail</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="progress">Upload Progress</Label>
            <Progress value={75} />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your video is currently being uploaded. Please wait for it to
              complete.
            </p>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Upload Video</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
