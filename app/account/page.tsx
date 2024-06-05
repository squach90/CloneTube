/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2lzTlpd6Rx8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import NavBar from "../_landing/NavBar";
import { Section } from "../_landing/Section";

export default function Component() {
  return (
    <Section>
      <NavBar />
      <div className="w-full max-w-6xl mx-auto px-4 py-10 md:px-6 lg:px-8">
        <div className="absolute top-20 left-10">
          <a href="/">
            <Button variant="outline">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <img src="https://github.com/squach90.png" alt="@squach90" />
            </Avatar>
          </div>
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold">@squach90</h1>
            <p className="text-gray-500 dark:text-gray-400">
              squach90@site.com
            </p>
          </div>
          <div className="ml-auto">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Profile Picture</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Update your profile picture
                  </p>
                </div>
                <Button variant="outline" size="icon">
                  <DeleteIcon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Change your email address
                  </p>
                </div>
                <Button variant="outline" size="icon">
                  <DeleteIcon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Password</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Update your password
                  </p>
                </div>
                <Button variant="outline" size="icon">
                  <DeleteIcon className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function DeleteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DownloadIcon(
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function ViewIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
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
