export const formatVietNameseToSring = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-")
} 