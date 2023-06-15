import HeroSection from "../MainSections/HeroSection/HeroSection";
import PlanSection from "../MainSections/PlanSection/PlanSection";
import TestimonialsSection from "../MainSections/TestimonialsSection/TestimonialsSection";
import UsSection from "../MainSections/UsSection/UsSection";
import styles from "./Main.module.css";

const Main = () => (
    <main className={styles.main}>
        <HeroSection />
        <PlanSection />
        <TestimonialsSection />
        <UsSection />
    </main>
);

export default Main;
