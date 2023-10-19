import { normalizedProviceNames } from "@/utils/data";
import { phone as phoneValidator } from "phone";

export const nameValidation = (errorList: string[], name?: string | null) => {
    if (name === undefined || name === null) {
        errorList.push("Name is required");
        return;
    }

    if (name.length < 3) {
        errorList.push("Name must be at least 3 characters long");
        return;
    }

    if (name.length > 50) {
        errorList.push("Name must be less than 50 characters long");
    }
};
const isValidEmail = (email: string) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email) && !email.endsWith(".") && email.indexOf("..") === -1 && email.split("@").length === 2;
};
export const mailValidation = (errorList: string[], mail?: string | null) => {
    if (mail === undefined || mail === null) {
        errorList.push("Mail is required");
        return;
    }

    if (!isValidEmail(mail)) {
        errorList.push(`Mail ${mail} is not valid`);
    }
};
export const phoneValidation = (errorList: string[], phone?: string | null) => {
    if (phone === undefined || phone === null) {
        errorList.push("Phone is required");
        return;
    }

    const phoneData = phoneValidator(phone, { country: "ES" });
    if (!phoneData.isValid) {
        errorList.push(`Phone ${phone} is not valid`);
    }
};
export const peopleValidation = (errorList: string[], people?: number | null) => {
    if (people === undefined || people === null) {
        errorList.push("People is required");
        return;
    }

    if (Number.isNaN(people)) {
        errorList.push("People must be a number");
        return;
    }

    if (people < 50) {
        errorList.push("People must be at least 50");
    }

    if (people > 500) {
        errorList.push("People must be less than 500");
    }

    if (people % 50 !== 0) {
        errorList.push(`People ${people} is not a multiple of 50`);
    }
};
export const ageValidation = (errorList: string[], age?: string | null) => {
    if (age === undefined || age === null) {
        errorList.push("Age is required");
        return;
    }

    if (age !== "adult" && age !== "child" && age !== "young" && age !== "senior") {
        errorList.push("Age is not valid");
    }
};
export const priceValidation = (errorList: string[], price?: number | null) => {
    if (price === undefined || price === null) {
        errorList.push("Price is required");
        return;
    }

    if (Number.isNaN(price)) {
        errorList.push("Price must be a number");
        return;
    }

    if (price < 50) {
        errorList.push("Price must be at least 50");
    }

    if (price > 500) {
        errorList.push("Price must be less than 500");
    }

    if (price % 50 !== 0) {
        errorList.push(`Price ${price} is not a multiple of 50`);
    }
};
const validLocations: string[] = ["city", "citySurroundings", "mountain", "beach", "countryside", "nearFromSea"];
export const locationValidation = (errorList: string[], locations?: (string | null)[] | null) => {
    if (locations === undefined || locations === null) {
        errorList.push("Location is required");
        return;
    }

    if (!Array.isArray(locations)) {
        errorList.push("Locations must be an array");
        return;
    }

    locations.forEach((location) => {
        if (typeof location !== "string") {
            errorList.push("Location must be a valid string");
            return;
        }

        if (!validLocations.includes(location)) {
            errorList.push(`Location ${location} is not valid`);
        }
    });
};

const validSeasons: string[] = ["winter", "spring", "summer", "autumn"];
export const seasonValidation = (errorList: string[], season?: string | null) => {
    if (season === undefined || season === null) {
        errorList.push("Season is required");
        return;
    }

    if (!validSeasons.includes(season)) {
        errorList.push(`Season ${season} is not valid`);
    }
};
const validMeals: string[] = ["dinner", "lunch", "both"];
export const mealValidation = (errorList: string[], meal?: string | null) => {
    if (meal === undefined || meal === null) {
        errorList.push("Meal is required");
        return;
    }

    if (!validMeals.includes(meal)) {
        errorList.push(`Meal ${meal} is not valid`);
    }
};
const validOtherServices: string[] = [
    "terrace",
    "danceZone",
    "parking",
    "garden",
    "kitchen",
    "placeForCeremony",
    "tent",
    "chapel",
    "childrenZone",
    "pool",
];
export const otherValidation = (errorList: string[], otherServices?: (string | null)[] | null) => {
    if (otherServices === undefined || otherServices === null) {
        errorList.push("Other is required");
        return;
    }

    if (!Array.isArray(otherServices)) {
        errorList.push("Other must be an array");
        return;
    }

    otherServices.forEach((otherService) => {
        if (typeof otherService !== "string") {
            errorList.push("Other service must be a valid string");
            return;
        }

        if (!validOtherServices.includes(otherService)) {
            errorList.push(`Other service ${otherService} is not valid`);
        }
    });
};
export function statesValidation(errorList: string[], states?: (string | null)[] | null) {
    if (states === undefined || states === null) {
        errorList.push("State is required");
        return;
    }

    if (!Array.isArray(states)) {
        errorList.push("State must be an array");
        return;
    }

    if (states.length === 0) {
        errorList.push("State must have at least one element");
        return;
    }

    states.forEach((state) => {
        if (typeof state !== "string") {
            errorList.push("State must be a valid string");
            return;
        }

        if (!normalizedProviceNames.includes(state)) {
            errorList.push(`State ${state} is not valid`);
        }
    });
}
