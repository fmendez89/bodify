"use client";

import React from "react";
import Image from "next/image";
import { provinces } from "@/utils/data";
import { Slider } from "../Slider/Slider";
import Province from "../Province/Province";
import { RadioGroup, Radio } from "../RadioGroup/RadioGroup";
import { CheckboxGroup, Checkbox } from "../CheckboxGroup/CheckboxGroup";
import styles from "./PlanForm.module.css";

type PlanType = "dinner" | "lunch" | "both";

type GuestType = "adult" | "child" | "young" | "senior";

type SeasonType = "winter" | "spring" | "summer" | "autumn";

type LocationType = "city" | "citySurroundings" | "mountain" | "beach" | "countryside" | "nearFromSea";

type OtherServiceType =
    | "terrace"
    | "danceZone"
    | "parking"
    | "garden"
    | "kitchen"
    | "placeForCeremony"
    | "tent"
    | "chapel"
    | "childrenZone"
    | "pool";

type Plan = {
    name: string;
    phone: string;
    state: string[];
    people: number;
    mainGuest: GuestType;
    price: number;
    location: LocationType[];
    season: SeasonType;
    type: PlanType;
    otherServices: OtherServiceType[];
};

const DefaulPlan: Plan = {
    name: "",
    phone: "",
    state: [],
    people: 50,
    mainGuest: "adult",
    price: 100,
    location: [],
    season: "spring",
    type: "dinner",
    otherServices: [],
};

const PlanForm = () => {
    const planRef = React.useRef<Plan>(DefaulPlan);

    const handleSetPlan = React.useCallback((planToset: Plan) => {
        planRef.current = planToset;
    }, []);

    return (
        <div className={styles.formContainer}>
            <div className={styles.sliderContainer}>
                <CheckboxGroup label="¿Dónde te gustaría casarte? (elige mínimo 2 posibilidades)">
                    {provinces.slice(0, 10).map((province) => (
                        <Province key={province.name} name={province.name} normalized={province.normalized} />
                    ))}
                </CheckboxGroup>
                <RadioGroup label="¿Cuándo te gustaría casarte?" defaultValue="spring">
                    <Radio value="spring">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/spring.png" alt="spring" width={50} height={50} />
                            </div>
                            <div>Primavera</div>
                        </div>
                    </Radio>
                    <Radio value="summer">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/summer.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Verano</div>
                        </div>
                    </Radio>
                    <Radio value="autumn">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/autumn.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Otoño</div>
                        </div>
                    </Radio>
                    <Radio value="winter">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/winter.png" alt="winter" width={50} height={50} />
                            </div>
                            <div>Invierno</div>
                        </div>
                    </Radio>
                </RadioGroup>
                <Slider
                    label="¿Cuál sería el número aproximado de invitados?"
                    minValue={50}
                    maxValue={300}
                    step={50}
                    defaultValue={100}
                    onChange={(value) => handleSetPlan({ ...planRef.current, people: value as unknown as number })}
                />
                <RadioGroup label="¿Qué rango de edad tendría la mayoría de invitados?" defaultValue="adult">
                    <Radio value="child">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/children.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Niños</div>
                        </div>
                    </Radio>
                    <Radio value="young">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/young.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Jóvenes</div>
                        </div>
                    </Radio>
                    <Radio value="adult">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/adult.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Adultos</div>
                        </div>
                    </Radio>
                    <Radio value="senior">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/senior.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Senior</div>
                        </div>
                    </Radio>
                </RadioGroup>
                <Slider
                    label="¿Cuál sería el precio del menú por persona que tienes pensado?"
                    minValue={50}
                    maxValue={250}
                    step={50}
                    defaultValue={100}
                    onChange={(value) => handleSetPlan({ ...planRef.current, price: value as unknown as number })}
                    postLabel="€"
                />
                <RadioGroup label="¿El convite sería comida o cena?" defaultValue="dinner">
                    <Radio value="lunch">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/lunch-color.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Comida</div>
                            <div className={styles.lunchDayTimeIcon}>
                                <Image src="/images/icons/day.png" alt="dinner" width={30} height={30} />
                            </div>
                        </div>
                    </Radio>
                    <Radio value="dinner">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/lunch-color.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Cena</div>
                            <div className={styles.lunchDayTimeIcon}>
                                <Image src="/images/icons/moon.png" alt="dinner" width={30} height={30} />
                            </div>
                        </div>
                    </Radio>
                </RadioGroup>
                <CheckboxGroup label="¿Dónde te gustaría que fuese el convite?">
                    <Checkbox value="city">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/city.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Ciudad</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="citySurroundings">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/surroundings.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Alrededores</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="mountain">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/mountain.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Montaña</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="beach">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/beach.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Playa</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="countryside">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/countryside.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Campo</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="nearFromSea">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/sea.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Cerca del mar</div>
                        </div>
                    </Checkbox>
                </CheckboxGroup>
                <CheckboxGroup label="¿Qué extra sería imprescindible para ti?">
                    <Checkbox value="terrace">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/terrace.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Terraza</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="danceZone">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/turntable.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Zona de baile</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="parking">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/wedding-car.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Parking</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="garden">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/garden.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Jardín</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="kitchen">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/kitchen.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Cocina</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="placeForCeremony">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/wedding-arch.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Ceremonia</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="tent">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/tent.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Carpa</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="chapel">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/church.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Capilla</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="childrenZone">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/playground.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Zona para niños</div>
                        </div>
                    </Checkbox>
                    <Checkbox value="pool">
                        <div className={styles.radioContainer}>
                            <div>
                                <Image src="/images/icons/pool.png" alt="dinner" width={50} height={50} />
                            </div>
                            <div>Piscina</div>
                        </div>
                    </Checkbox>
                </CheckboxGroup>
            </div>
        </div>
    );
};

export default PlanForm;
