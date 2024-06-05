"use client";

import Image from "next/image";
import { Section } from "./_landing/Section";
import NavBar from "./_landing/NavBar";
import AccountPage from "./_landing/AccountPage";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Index from "./_landing/index";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <Section>
      <NavBar />
      <Index />
      <Analytics />
    </Section>
  );
}
