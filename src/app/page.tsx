"use client";

import Demo from "@/components/Demo/Demo";
import FilterBar from "@/components/FilterBar/FilterBar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import VideoList from "@/components/VideoList/VideoList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <FilterBar />
      <VideoList />
      <Demo />
      <Footer />
    </main>
  );
}
