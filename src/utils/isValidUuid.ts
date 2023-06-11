const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const isValidUuid = (uuid?: string) => {
    if (!uuid || uuid.length !== 36) {
        return false;
    }
    return regex.test(uuid);
};
