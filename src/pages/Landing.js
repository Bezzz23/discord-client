import React from "react";
import LandingLayout from "components/layouts/LandingLayout";
import Hero from "components/sections/Hero";
import userStore from 'stores/userStore'

export default function Landing() {
  const { current } = userStore();
  return (
    <LandingLayout>
      <Hero
        title="An invite-only place with plenty of room to talk"
        subtitle="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        image="/landing.svg"
        ctaText="Get Started"
        ctaLink="/register"
      />
    </LandingLayout>
  );
}
