import PlanForm from "@/components/PlanForm/PlanForm";
import { Oooh_Baby } from "next/font/google";
import { classnames } from "@/utils/classnames";
import styles from "./styles.module.css";

const dancigScript = Oooh_Baby({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-dancing-script",
    display: "swap",
});

const PlanPage = () => (
    <section className={styles.section}>
        <div className={classnames(styles.header, dancigScript.variable)}>Crea tu plan</div>
        <div className={styles.formContainer}>
            <PlanForm />
        </div>
    </section>
);

export default PlanPage;
