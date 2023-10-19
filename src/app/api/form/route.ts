import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import {
    nameValidation,
    mailValidation,
    phoneValidation,
    peopleValidation,
    ageValidation,
    priceValidation,
    locationValidation,
    seasonValidation,
    mealValidation,
    otherValidation,
    statesValidation,
} from "@/utils/formValidators";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const revalidate = 0;

export async function POST(request: Request) {
    const supabase = createClient(supabaseURL, serviceKey);

    const { name, mail, phone, states, people, age, price, location, season, meal, other } = await request.json();

    const errorList: string[] = [];

    nameValidation(errorList, name);
    mailValidation(errorList, mail);
    phoneValidation(errorList, phone);
    peopleValidation(errorList, people);
    ageValidation(errorList, age);
    priceValidation(errorList, price);
    locationValidation(errorList, location);
    seasonValidation(errorList, season);
    mealValidation(errorList, meal);
    otherValidation(errorList, other);
    statesValidation(errorList, states);

    if (errorList.length > 0) {
        return NextResponse.json({ errors: errorList }, { status: 400 });
    }

    const res = await supabase.from("forms").insert([
        {
            name,
            mail,
            phone,
            states,
            people,
            age,
            price,
            location,
            season,
            meal,
            other,
        },
    ]);

    if (res.error) {
        return NextResponse.json({ errors: [res.error.message] }, { status: 500 });
    }

    return NextResponse.json({}, { status: 200 });
}
